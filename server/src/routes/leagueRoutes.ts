import { FastifyInstance } from "fastify";
import {
  createLeague,
  getLeagues,
  deleteLeague,
  updateLeague,
  findLeague,
} from "../controllers/leagueController";

async function leagueRoutes(server: FastifyInstance) {
  server.get("/", getLeagues);
  server.post("/create", createLeague);
  server.get("/:id", findLeague);
  server.delete("/:id", deleteLeague);
  server.put("/:id", updateLeague);
}

export default leagueRoutes;
