import { FastifyInstance } from "fastify";
import {
  createPlayer,
  getPlayers,
  deletePlayer,
  updatePlayer,
  findPlayer,
} from "../controllers/playerController";

async function playerRoutes(server: FastifyInstance) {
  server.get("/", getPlayers);
  server.post("/create", createPlayer);
  server.get("/:id", findPlayer);
  server.delete("/:id", deletePlayer);
  server.put("/:id", updatePlayer);
}

export default playerRoutes;
