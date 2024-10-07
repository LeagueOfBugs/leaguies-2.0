import { FastifyInstance } from "fastify";
import {
  createAward,
  getAwards,
  updateAward,
} from "../controllers/awardController";

async function awardRoutes(server: FastifyInstance) {
  server.get("/", getAwards);
  server.post("/create", createAward);
  server.put("/:id", updateAward);
}

export default awardRoutes;
