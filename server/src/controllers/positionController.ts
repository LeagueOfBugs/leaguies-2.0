import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export async function getPositions(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const positions = await prisma.position.findMany();
    reply.send(positions);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching positions.",
    });
  }
}

export async function createPosition(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name, abbreviation, sportId, subPositions } = request.body as {
    name: string;
    abbreviation: string;
    sportId: number;
    subPositions?: Array<{ name: string; abbreviation?: string }>;
  };

  try {
    const position = await prisma.position.create({
      data: {
        name,
        abbreviation,
        sportId,

        subPositions: subPositions
          ? {
              create: subPositions.map((subPosition) => ({
                name: subPosition.name,
                abbreviation: subPosition.abbreviation,
              })),
            }
          : undefined,
      },
      include: {
        subPositions: true, // To include subPositions in the response
      },
    });

    return reply.status(201).send(position);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({
      error: "An error occurred while creating the position.",
    });
  }
}

export async function deletePosition(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };

  try {
    const position = await prisma.position.delete({
      where: {
        id: parseInt(id),
      },
    });
    return reply.status(200).send(position);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the position.",
    });
  }
}
