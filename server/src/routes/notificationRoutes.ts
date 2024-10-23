import { FastifyInstance } from "fastify";
import {
  createNotification,
  getNotifications,
} from "../controllers/notificationController";

export async function notificationRoutes(server: FastifyInstance) {
  server.get("/", getNotifications);
  server.post("/create", createNotification);
}
