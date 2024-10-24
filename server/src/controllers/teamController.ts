import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export const getTeams = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const teams = await prisma.team.findMany();
    reply.send(teams);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching teams.",
    });
  }
};

export const getUnregisteredTeams = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const leaguelessTeams = await prisma.team.findMany({
      where: {
        leagueId: null,
      },
    });

    reply.send(leaguelessTeams);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching teams.",
    });
  }
};

export const createTeam = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { name, leagueId } = request.body as { name: string; leagueId: number };
  try {
    const team = await prisma.team.create({
      data: { name, leagueId },
    });
    reply.send(team);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating the team.",
    });
  }
};

export const findTeam = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  try {
    const team = await prisma.team.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        league: true,
        invites: {
          select: {
            status: true,
            league: {
              select: {
                name: true,
              },
            },
            player: {
              select: {
                name: true,
              },
            },
          },
        },
        seasons: {
          include: {
            season: {
              select: {
                id: true,
                name: true,
                active: true,
                trophy: true,
                winnerTeam: true,
                startDate: true,
                endDate: true,
              },
            },
          },
        },
        winningSeasons: true,
        trophies: true,
        staff: {
          include: {
            staff: {
              select: {
                name: true,
                role: true,
              },
            },
          },
        },
        players: {
          include: {
            player: {
              select: {
                name: true,
                positions: {
                  include: {
                    position: {
                      select: {
                        name: true,
                        abbreviation: true,
                        sportId: true,
                        subPositions: {
                          select: {
                            name: true,
                            abbreviation: true,
                            id: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    const formatTeamSeason = () => {
      return team?.seasons?.map((season) => {
        return {
          id: season.season.id,
          name: season.season.name,
          active: season.season.active,
          startDate: season.season.startDate,
          endDate: season.season.endDate,
          trophy: season.season.trophy ?? null,
          wins: season.wins,
          losses: season.losses,
          draws: season.draws,
          winnerTeam: season.season.winnerTeam ?? null,
        };
      });
    };

    const formatStaff = () => {
      return team?.staff?.map((staff) => {
        return {
          id: staff.id,
          name: staff.staff.name,
          role: staff.role,
        };
      });
    };

    const formatPlayers = () => {
      return team?.players?.map((player) => {
        return {
          id: player.playerId,
          name: player.player.name,
          positions: player.player.positions.map((position) => {
            const subPositionId = position.subPositionId;
            return {
              position: position.position.name,
              abbreviation: position.position.abbreviation,
              subPositions: position.position.subPositions.find(
                (subPosition) => {
                  return subPositionId === subPosition.id;
                }
              ),
            };
          }),
        };
      });
    };

    const formattedTeam = {
      ...team,
      seasons: formatTeamSeason(),
      staff: formatStaff(),
      players: formatPlayers(),
      invites: team?.invites,
    };

    return reply.status(200).send(formattedTeam);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while fetching team.",
    });
  }
};

export const updateTeam = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  const { name, leagueId } = request.body as { name: string; leagueId: string };
  try {
    const team = await prisma.team.update({
      where: { id: parseInt(id) },
      data: { name, leagueId: parseInt(leagueId) || null },
    });
    reply.send(team);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while updating the player.",
    });
  }
};

export const deleteTeam = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };

  try {
    await prisma.team.delete({
      where: {
        id: parseInt(id),
      },
    });
    return reply.status(200).send({ message: "Team deleted successfully" });
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while deleting the team.",
    });
  }
};

export const joinLeague = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { leagueId, teamId } = request.body as {
    leagueId: number;
    teamId: number;
  };

  try {
    const league = await prisma.league.findUnique({
      where: { id: leagueId },
    });

    if (!league) {
      return reply.status(404).send({ error: "League not found." });
    }

    const updateTeam = await prisma.team.update({
      where: { id: teamId },
      data: {
        leagueId: leagueId,
      },
    });

    return reply.send(updateTeam);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while joining the league.",
    });
  }
};

export const leaveLeague = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { teamId } = request.body as { teamId: number };
  try {
    const team = await prisma.team.update({
      where: { id: teamId },
      data: {
        leagueId: null,
      },
    });
    return reply.send(team);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while leaving the league.",
    });
  }
};
