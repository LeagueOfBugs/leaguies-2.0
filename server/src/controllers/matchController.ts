import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function getMatches(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function getMatch(request: FastifyRequest, reply: FastifyReply) {}
export async function createMatch(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name } = request.body as { name: string };
  try {
    const match = await prisma.match.create({
      data: {
        name,
      },
    });
    reply.send(match);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating the match.",
    });
  }
}
export async function updateMatch(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function deleteMatch(
  request: FastifyRequest,
  reply: FastifyReply
) {}
