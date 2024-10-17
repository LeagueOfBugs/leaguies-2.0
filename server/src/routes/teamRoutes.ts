import { FastifyInstance } from "fastify";
import {
  createTeam,
  getTeams,
  deleteTeam,
  updateTeam,
  findTeam,
  getUnregisteredTeams,
} from "../controllers/teamController";

async function teamRoutes(server: FastifyInstance) {
  server.get("/", getTeams);
  server.get("/unregistered", getUnregisteredTeams);
  server.post("/create", createTeam);
  server.get("/:id", findTeam);
  server.delete("/:id", deleteTeam);
  server.put("/:id", updateTeam);
}

export default teamRoutes;
