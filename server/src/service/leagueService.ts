import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const joinLeagueService = async (teamId: number, leagueId: number) => {
  try {
    const league = await prisma.league.findUnique({
      where: { id: leagueId },
    });

    if (!league) {
      return { error: "League not found." };
    }

    const team = await prisma.team.findUnique({
      where: { id: teamId },
    });

    if (!team) {
      return { error: "Team not found." };
    }

    const updateTeam = await prisma.team.update({
      where: { id: teamId },
      data: {
        leagueId: leagueId,
      },
    });

    return updateTeam;
  } catch (error) {
    return { error: "An error occurred while joining the league." };
  }
};
