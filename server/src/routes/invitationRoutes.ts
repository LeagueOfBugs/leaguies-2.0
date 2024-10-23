import { FastifyInstance } from "fastify";
import { createInvitation } from "../controllers/invitationController";

export async function invitationRoutes(server: FastifyInstance) {
  server.post("/create", createInvitation);
}
