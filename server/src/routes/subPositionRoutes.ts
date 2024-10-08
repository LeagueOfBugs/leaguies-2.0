import { FastifyInstance } from "fastify";
import {
  createSubPosition,
  deleteSubPosition,
  getSubPositions,
} from "../controllers/subPositionController";

async function sportRoutes(server: FastifyInstance) {
  server.get("/", getSubPositions);
  server.post("/create", createSubPosition);
  server.delete("/:id", deleteSubPosition);
}

export default sportRoutes;
