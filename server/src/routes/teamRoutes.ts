import { FastifyInstance } from "fastify";
import {
  createTeam,
  getTeams,
  deleteTeam,
  updateTeam,
  findTeam,
} from "../controllers/teamController";

async function teamRoutes(server: FastifyInstance) {
  server.get("/", getTeams);
  server.post("/create", createTeam);
  server.get("/:id", findTeam);
  server.delete("/:id", deleteTeam);
  server.put("/:id", updateTeam);
}

export default teamRoutes;
