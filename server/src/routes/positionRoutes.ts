import { FastifyInstance } from "fastify";
import { createPosition, deletePosition, getPositions } from "../controllers/positionControllers";


async function sportRoutes(server: FastifyInstance) {
  server.get("/", getPositions);
  server.post("/create", createPosition);
  server.delete("/:id", deletePosition);
}

export default sportRoutes;
