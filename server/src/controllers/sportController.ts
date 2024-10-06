import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export async function getSports(request: FastifyRequest, reply: FastifyReply) {
  try {
    const sports = await prisma.sport.findMany();
    reply.send(sports);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching sports.",
    });
  }
}

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

export async function findSport(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  try {
    const sport = await prisma.sport.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return reply.status(200).send(sport);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching a sport.",
    });
  }
}

export async function updateSport(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };

  // TODO: Create types for request body
  const { positions, statTypes, leagues } = request.body as {
    positions?: any[];
    statTypes?: any[];
    leagues?: any[];
  };

  try {
    const existingSport = await prisma.sport.findUnique({
      where: { id: parseInt(id) },
      include: {
        positions: true,
        statTypes: true,
        leagues: {
          include: {
            teams: {
              include: {
                players: true,
              },
            },
          },
        },
      },
    });

    if (!existingSport) {
      return reply.status(404).send({ error: "Sport not found." });
    }

    const updatedSport = await prisma.sport.update({
      where: {
        id: parseInt(id),
      },
      data: {
        positions: {
          create: positions?.map((position) => ({ name: position.name })),
        },
        statTypes: {
          create: statTypes?.map((statType) => ({ name: statType.name })),
        },
        leagues: {
          create: leagues?.map((league) => ({
            name: league.name,
            teams: league.teams
              ? {
                  create: league.teams.map(
                    (team: { name: any; players: any[] }) => ({
                      name: team.name,
                      players: team.players
                        ? {
                            create: team.players.map((player) => ({
                              name: player.name,
                            })),
                          }
                        : undefined,
                    })
                  ),
                }
              : undefined,
          })),
        },
      },
    });

    return reply.status(200).send(updatedSport);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while updating a sport.",
    });
  }
}

export async function deleteSport(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };
  try {
    const sport = prisma.sport.delete({
      where: {
        id: parseInt(id),
      },
    });
    return reply.status(200).send(sport);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting a sport.",
    });
  }
}
