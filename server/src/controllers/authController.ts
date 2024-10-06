import { loginService, registerService } from "../services/authService";
import { FastifyRequest, FastifyReply, FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";

export const authenticationPlugin: FastifyPluginAsync = fp(async (server,) => {
  console.log("Registering authenticate function");

  server.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
        console.log("request.user: ", request.user);
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
});

export const authorizationPlugin: FastifyPluginAsync = async (server) => {
  server.decorate(
    "authorize",
    (requiredGroups: string[]) =>
      async (request: FastifyRequest, reply: FastifyReply) => {
        const userGroups =
          (request.user as { "cognito:groups": string[] })?.[
            "cognito:groups"
          ] || [];
        const hasAccess = requiredGroups.some((group) =>
          userGroups.includes(group)
        );
        if (!hasAccess) {
          return reply.status(403).send({ message: "Forbidden" });
        }
      }
  );
};

export const login = async (request: FastifyRequest, reply: FastifyReply) => {
  const { username, password } = request.body as {
    username: string;
    password: string;
  };

  if (!username || !password) {
    return reply
      .status(400)
      .send({ message: "Username and password are required" });
  }

  try {
    const data = await loginService(username, password);
    return reply.status(200).send({ message: "Login successful", data });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login failed:", error);
      return reply.status(401).send({
        message: "Login failed",
        error: error.message,
      });
    } else { 
      console.error("Unknown error:", error);
      return reply.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
};

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { username, password, email } = request.body as {
    username: string;
    password: string;
    email: string;
  };

  if (!username || !password || !email) {
    return reply
      .status(400)
      .send({ message: "Email and password are required" });
  }

  try {
    const data = await registerService(username, password, email);
    return reply
      .status(201)
      .send({ message: "User registered successfully", data });
  } catch (error) {
    if (error instanceof Error) {
      console.error("User registration failed:", error);
      return reply.status(400).send({
        message: "User registration failed",
        error: error.message,
      });
    } else {
      console.error("Unknown error:", error);
      return reply.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
};
