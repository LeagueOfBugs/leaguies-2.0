import fastify from "fastify";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import fastifyJwt from "@fastify/jwt";
import { authN, authZ } from "./controllers/authController";

dotenv.config();

const server = fastify();

server.register(require("@fastify/formbody"));

server.register(fastifyJwt, {
  secret: process.env.JWT_SECRET!,
});

server.decorate("authenticate", authN);
server.decorate("authorize", authZ);

server.register(authRoutes);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

/* 
authn - done
authz - done
refresh token
middleware - done

Users:
Player
Coach
League Commisioner
*/
