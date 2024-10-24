import { FastifyInstance } from "fastify";
import {
  createInvitation,
  updateInvitation,
} from "../controllers/invitationController";

export async function invitationRoutes(server: FastifyInstance) {
  server.post("/create", createInvitation);
  server.post("/response", updateInvitation);
}
