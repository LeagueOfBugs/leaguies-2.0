import { FastifyInstance } from "fastify";
import { createMatch, deleteMatch, getMatch, getMatches, updateMatch } from "../controllers/matchController";

async function matchRoutes(server: FastifyInstance) {
  server.get("/", getMatches);
  server.post("/create", createMatch);
  server.get("/:id", getMatch);
  server.delete("/:id", deleteMatch);
  server.put("/:id", updateMatch);
}

export default matchRoutes;
