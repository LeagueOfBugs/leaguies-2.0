import * as http from "http";

declare module "fastify" {
  export interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply
    ) => Promise<void>;

    authorize(
      groups: string[]
    ): (request: FastifyRequest, reply: FastifyReply) => any;
    util: (string1, string2) => string;
    fastifyJwt: (req, payload) => any;
  }

  export interface FastifyRequest {
    user?: any;
  }
}
