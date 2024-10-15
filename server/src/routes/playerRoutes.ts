import { FastifyInstance } from "fastify";
import {
  createPlayer,
  getPlayers,
  deletePlayer,
  updatePlayer,
  findPlayer,
  createPlayers,
  findPlayerLeagues,
} from "../controllers/playerController";

async function playerRoutes(server: FastifyInstance) {
  server.get("/", getPlayers);
  server.post("/create", createPlayer);
  server.post("/create-bulk", createPlayers);
  server.get("/:id", findPlayer);
  server.get("/:id/leagues", findPlayerLeagues);
  server.delete("/:id", deletePlayer);
  server.put("/:id", updatePlayer);
}

export default playerRoutes;
