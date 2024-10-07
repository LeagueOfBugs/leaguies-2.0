import { FastifyInstance } from "fastify";
import { createPosition, deletePosition, getPositions } from "../controllers/positionController";


async function sportRoutes(server: FastifyInstance) {
  server.get("/", getPositions);
  server.post("/create", createPosition);
  // Will have to figure out how deletion works with references in prisma
  // server.delete("/:id", deletePosition);
}

export default sportRoutes;
