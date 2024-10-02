import { FastifyInstance } from "fastify";
import { login, register } from "../controllers/authController";


async function authRoutes(server: FastifyInstance) {
  server.post("/login", login);
  server.post("/register", register);
}

export default authRoutes;
