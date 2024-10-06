import fastify from "fastify";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import fastifyJwt from "@fastify/jwt";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";
import { PrismaClient } from "@prisma/client";
import leagueRoutes from "./routes/leagueRoutes";
import playerRoutes from "./routes/playerRoutes";
import teamRoutes from "./routes/teamRoutes";
const prisma = new PrismaClient();

dotenv.config();

const server = fastify({ logger: false });

server.register(require("@fastify/formbody"));

async function fetchJWKS(JWKS_URL: any) {
  try {
    const response = await fetch(JWKS_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jwks = await response.json();
    if (!Array.isArray(jwks.keys)) {
      throw new Error("Invalid JWKS response");
    }
    return jwks.keys[0];
  } catch (error) {
    console.error("Error fetching JWKS:", error);
    throw new Error("Could not fetch JWKS");
  }
};

server.register(fastifyJwt, {
  secret: async (req: FastifyRequest, token: any) => {
    try {
      const keys = await fetchJWKS(process.env.JWT_SECRET!);
      if (!req.headers.authorization) {
        throw new Error("Authorization header missing");
      }
      if (!keys) {
        throw new Error("No keys found in JWKS");
      }
      const useThisToken = req.headers.authorization.split(" ")[1];
      const decodedToken = server.jwt.decode(useThisToken, {
        complete: true,
      }) as {
        header: { kid: string };
        payload: any;
      };
      if (keys === decodedToken.header.kid) {
        if (keys.n && keys.e) {
          const publicKey = `-----BEGIN PUBLIC KEY-----\n${Buffer.from(
            keys.n,
            "base64"
          ).toString("base64")}\n${Buffer.from(keys.e, "base64").toString(
            "base64"
          )}\n-----END PUBLIC KEY-----`;
          console.log("Public Key:", publicKey);
          return publicKey;
        } else {
          console.error("No usable key format found.");
        }
      }
    } catch (error) {
      console.error("Error fetching JWKS:", error);
      throw new Error("Could not fetch JWKS");
    }
  },
});

server.decorate(
  "authenticate",
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      // const response = await request.jwtVerify();
      // console.log(`response: ${response}`);
    } catch (error) {
      console.error("Authorization failed:", error);
      if (error instanceof Error) {
        return reply.status(401).send({
          message: "Authorization failed",
          error: error.message,
        });
      } else {
        console.error("Authorization failed else");
        return reply.status(500).send({
          message: "Internal Server Error",
        });
      }
    }
  }
);

server.decorate(
  "authorize",
  (requiredGroups: string[]) =>
    async (request: FastifyRequest, reply: FastifyReply) => {
      const userGroups =
        (request.user as { "cognito:groups": string[] })?.["cognito:groups"] ||
        [];
      console.log(`userGroups: ${requiredGroups}`);
      const hasAccess = requiredGroups.some((group) =>
        userGroups.includes(group)
      );
      if (!hasAccess) {
        return reply.status(403).send({ message: "Forbidden" });
      }
    }
);

server.register(authRoutes);
server.register(leagueRoutes, { prefix: "/api/leagues" });
server.register(teamRoutes, { prefix: "/api/teams" });
server.register(playerRoutes, { prefix: "/api/players" });

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
