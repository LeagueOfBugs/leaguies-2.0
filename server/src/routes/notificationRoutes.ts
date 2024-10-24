import { FastifyInstance } from "fastify";
import {
  createNotification,
  getNotifications,
} from "../controllers/notificationController";
import { updateInvitation } from "../controllers/invitationController";

export async function notificationRoutes(server: FastifyInstance) {
  server.get("/", getNotifications);
  server.post("/create", createNotification);
  server.post("/response", updateInvitation);
}
