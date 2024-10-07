import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAwards(request: FastifyRequest, reply: FastifyReply) {
  const { playerId } = request.params as { playerId: string };
  try {
    const awards = await prisma.award.findMany({
      where: { playerId: parseInt(playerId) },
    });
    return reply.status(200).send(awards);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching awards.",
    });
  }
}

export async function createAward(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name } = request.body as {
    name: string;
  };

  try {
    const award = await prisma.award.create({
      data: { name },
    });
    reply.send(award);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating an award.",
    });
  }
}

export async function updateAward(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };
  const { name, playerId, matchId } = request.body as {
    name: string;
    playerId: number;
    matchId: number;
  };
  try {
    const award = await prisma.award.update({
      where: { id: parseInt(id) },
      data: { name, playerId, matchId },
    });
    reply.send(award);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while updating the award.",
    });
  }
}
