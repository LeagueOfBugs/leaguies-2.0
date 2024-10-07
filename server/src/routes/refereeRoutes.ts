import { FastifyInstance } from "fastify";
import {
  createReferee,
  deleteReferee,
  getReferee,
  getReferees,
  updateReferee,
} from "../controllers/refereeControllers";

async function refereeRoutes(server: FastifyInstance) {
  server.get("/", getReferees);
  server.post("/create", createReferee);
  server.get("/:id", getReferee);
  server.delete("/:id", deleteReferee);
  server.put("/:id", updateReferee);
}

export default refereeRoutes;
