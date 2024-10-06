import { FastifyInstance } from "fastify";
import {
  createSport,
  deleteSport,
  findSport,
  getSports,
  updateSport,
} from "../controllers/sportController";

async function sportRoutes(server: FastifyInstance) {
  server.get("/", getSports);
  server.post("/create", createSport);
  server.get("/:id", findSport);
  server.put("/:id", updateSport);
  server.delete("/:id", deleteSport);
}

export default sportRoutes;
