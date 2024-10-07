import { FastifyInstance } from "fastify";
import { createSeason, deleteSeason, getSeason, getSeasons, updateSeason } from "../controllers/seasonController";

async function seasonRoutes(server: FastifyInstance) {
  server.get("/", getSeasons);
  server.post("/create", createSeason);
  server.get("/:id", getSeason);
  server.delete("/:id", deleteSeason);
  server.put("/:id", updateSeason);
}

export default seasonRoutes;
