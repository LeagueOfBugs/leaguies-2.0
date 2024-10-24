import { FastifyInstance } from "fastify";
import {
  createTeam,
  getTeams,
  deleteTeam,
  updateTeam,
  findTeam,
  getUnregisteredTeams,
  joinLeague,
  leaveLeague,
} from "../controllers/teamController";

async function teamRoutes(server: FastifyInstance) {
  server.get("/", getTeams);
  server.get("/unregistered", getUnregisteredTeams);
  server.post("/create", createTeam);
  server.get("/:id", findTeam);
  server.delete("/:id", deleteTeam);
  server.put("/:id", updateTeam);
  server.put("/join-league", joinLeague);
  server.put("/leave-league", leaveLeague);
}

export default teamRoutes;
