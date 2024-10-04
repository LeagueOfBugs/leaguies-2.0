import { FastifyInstance } from "fastify";
import {
  createLeague,
  getLeagues,
  deleteLeague,
  updateLeague,
} from "../controllers/leagueControllers";

async function leagueRoutes(server: FastifyInstance) {
  server.get("/", getLeagues);
  server.post("/create", createLeague);
  server.delete("/:id", deleteLeague);
  server.put("/:id", updateLeague);
}

export default leagueRoutes;
