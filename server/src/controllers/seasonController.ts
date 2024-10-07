import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getSeasons(request: FastifyRequest, reply: FastifyReply) {
  try {
    const seasons = await prisma.season.findMany();
    reply.send(seasons);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching seasons.",
    });
  }
}

export async function getSeason(request: FastifyRequest, reply: FastifyReply) {}

export async function createSeason(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name } = request.body as { name: string };
  try {
    const season = await prisma.season.create({
      data: {
        name,
      },
    });
    reply.send(season);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating a season.",
    });
  }
}
export async function updateSeason(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function deleteSeason(
  request: FastifyRequest,
  reply: FastifyReply
) {}
