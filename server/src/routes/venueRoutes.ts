import { FastifyInstance } from "fastify";
import { createVenue, getVenues, updateVenue } from "../controllers/venueController";

async function venueRoutes(server: FastifyInstance) {
  server.get("/", getVenues);
  server.post("/create", createVenue);
  server.put("/:id", updateVenue);
}

export default venueRoutes;
