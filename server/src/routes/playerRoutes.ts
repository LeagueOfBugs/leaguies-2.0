import { FastifyInstance } from "fastify";
import {
  createPlayer,
  getPlayers,
  deletePlayer,
  updatePlayer,
  findPlayer,
  createPlayers,
  findPlayerLeagues,
  getfreeAgents,
} from "../controllers/playerController";
import { getUnregisteredTeams } from "../controllers/teamController";

async function playerRoutes(server: FastifyInstance) {
  server.get("/", getPlayers);
  server.get("/free-agents", getfreeAgents);
  server.post("/create", createPlayer);
  server.post("/create-bulk", createPlayers);
  server.get("/:id", findPlayer);
  server.get("/:id/leagues", findPlayerLeagues);
  server.delete("/:id", deletePlayer);
  server.put("/:id", updatePlayer);
}

export default playerRoutes;
