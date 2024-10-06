import { FastifyInstance } from "fastify";
import {
  createSport,
  findSport,
  getSports,
} from "../controllers/sportController";

async function playerRoutes(server: FastifyInstance) {
  server.get("/", getSports);
  server.post("/create", createSport);
  server.get("/:id", findSport);
}

export default playerRoutes;
