import { PrismaClient } from "@prisma/client";
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

const prisma = new PrismaClient();
export async function getReferees(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function getReferee(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function createReferee(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name } = request.body as { name: string };
  try {
    const referee = await prisma.referee.create({
      data: {
        name,
      },
    });
    reply.send(referee);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating the referee.",
    });
  }
}
export async function updateReferee(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function deleteReferee(
  request: FastifyRequest,
  reply: FastifyReply
) {}
