import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

export async function getMatches(request: FastifyRequest, reply: FastifyReply) {}
export async function getMatch(request: FastifyRequest, reply: FastifyReply) {}
export async function createMatch(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function updateMatch(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function deleteMatch(
  request: FastifyRequest,
  reply: FastifyReply
) {}
