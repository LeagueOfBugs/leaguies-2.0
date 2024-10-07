import { FastifyInstance } from "fastify";
import {
  createTrophy,
  deleteTrophy,
  getTrophies,
  getTrophy,
  updateTrophy,
} from "../controllers/trophyController";

async function trophyRoutes(server: FastifyInstance) {
  server.get("/", getTrophies);
  server.post("/create", createTrophy);
  server.get("/:id", getTrophy);
  server.delete("/:id", deleteTrophy);
  server.put("/:id", updateTrophy);
}

export default trophyRoutes;
