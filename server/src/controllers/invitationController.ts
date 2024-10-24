import { PrismaClient } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";
import { joinLeagueService } from "../service/leagueService";
import { playerJoinLeague } from "../service/playerService";

const prisma = new PrismaClient();

export const createInvitation = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { inviterId, inviterType, inviteeId, inviteeType } = request.body as {
    inviterId?: number;
    inviterType: string;
    inviteeId: number;
    inviteeType: string;
  };

  try {
    const invitationData: any = {
      status: "pending",
      inviterId,
      inviterType,
      inviteeId,
      inviteeType,
    };

    if (inviterType === "league") {
      invitationData.leagueId = inviterId;
    } else if (inviterType === "team") {
      invitationData.teamId = inviterId;
    } else {
      invitationData.playerId = inviterId;
    }

    if (inviteeType === "league") {
      invitationData.leagueId = inviteeId;
    } else if (inviteeType === "team") {
      invitationData.teamId = inviteeId;
    } else {
      invitationData.playerId = inviteeId;
    }

    const invite = await prisma.invitation.create({
      data: invitationData,
    });

    reply.status(201).send(invite);
  } catch (error) {
    console.error("Error creating invitation:", error);
    reply.status(500).send({
      error: "An error occurred while creating the invite.",
    });
  }
};

export const updateInvitation = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id, response } = request.body as { id: number; response: string };
  try {
    const invitation = await prisma.invitation.update({
      where: { id },
      data: { status: response },
    });

    if (response === "accept") {
      switch (invitation.inviterType) {
        case "league":
          if (invitation.inviteeType === "team") {
            await joinLeagueService(
              invitation.inviteeId,
              invitation.inviterId!
            );
          }
          if (invitation.inviteeType === "player") {
            console.log("player join league");
            await playerJoinLeague(invitation.inviteeId, invitation.inviterId!);
          }
          break;
        // case "team":
      }
    }
    reply.send(invitation);
  } catch (error) {}
};
