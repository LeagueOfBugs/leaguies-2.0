import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export async function getSports(request: FastifyRequest, reply: FastifyReply) {}

export async function createSport(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name } = request.body as { name: string };

  try {
    const sport = await prisma.sport.create({
      data: {
        name,
      },
    });
    return reply.status(200).send(sport);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating a sport.",
    });
  }
}

export async function findSport(request: FastifyRequest, reply: FastifyReply) {}
