import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export async function getSubPositions(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const subPositions = await prisma.subPosition.findMany();
    reply.send(subPositions);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching sub positions.",
    });
  }
}

export async function createSubPosition(
  request: FastifyRequest,
  reply: FastifyReply
) {
  // TODO: create types for request body
  const { name, abbreviation, positionId } = request.body as any;
  try {
    const subPosition = await prisma.subPosition.create({
      data: {
        name,
        abbreviation,
        positionId,
      },
    });

    reply.send(subPosition);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating sub position.",
    });
  }
}

export async function deleteSubPosition(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };
  try {
    const subPosition = await prisma.subPosition.delete({
      where: {
        id: parseInt(id),
      },
    });

    return reply.status(200).send(subPosition);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting sub position.",
    });
  }
}
