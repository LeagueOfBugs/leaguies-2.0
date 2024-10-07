import { PrismaClient } from "@prisma/client";
import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

const prisma = new PrismaClient();
export async function getTrophies(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function getTrophy(request: FastifyRequest, reply: FastifyReply) {}
export async function createTrophy(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name } = request.body as { name: string };
  try {
    const trophy = await prisma.trophy.create({
      data: {
        name,
      },
    });
    reply.send(trophy);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating the trophy.",
    });
  }
}
export async function updateTrophy(
  request: FastifyRequest,
  reply: FastifyReply
) {}
export async function deleteTrophy(
  request: FastifyRequest,
  reply: FastifyReply
) {}
