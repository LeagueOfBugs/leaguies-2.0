import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export interface AuthenticatedFastifyInstance extends FastifyInstance {
  authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
}
