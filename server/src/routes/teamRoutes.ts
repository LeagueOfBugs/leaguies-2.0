import { FastifyInstance } from "fastify";
import {
  createTeam,
  getTeams,
  deleteTeam,
  updateTeam,
} from "../controllers/teamControllers";

async function teamRoutes(server: FastifyInstance) {
  server.get("/", getTeams);
  server.post("/create", createTeam);
  server.delete("/:id", deleteTeam);
  server.put("/:id", updateTeam);
}

export default teamRoutes;
