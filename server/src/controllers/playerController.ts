import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export const getPlayers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const players = await prisma.player.findMany();
    reply.send(players);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching players.",
    });
  }
};

export const createPlayer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { name, teamId } = request.body as { name: string; teamId: number };
  try {
    const player = await prisma.player.create({
      data: { name, teamId },
    });
    reply.send(player);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating the Player.",
    });
  }
};
export const updatePlayer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  const { name, teamId } = request.body as { name: string; teamId: number };
  try {
    const player = await prisma.player.update({
      where: { id: parseInt(id) },
      data: { name, teamId },
    });
    reply.send(player);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while updating the player.",
    });
  }
};
export const deletePlayer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };

  try {
    await prisma.player.delete({
      where: {
        id: parseInt(id),
      },
    });
    return reply.status(200).send({ message: "Player deleted successfully" });
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the player.",
    });
  }
};
