import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getVenues(request: FastifyRequest, reply: FastifyReply) {}
export async function createVenue(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { name, location } = request.body as { name: string; location: string };
  try {
    const venue = await prisma.venue.create({
      data: {
        name,
        location,
      },
    });
    reply.send(venue);
  } catch (error) {
    return reply.status(500).send({
      error: "An error occurred while creating the venue.",
    });
  }
}
export async function updateVenue(
  request: FastifyRequest,
  reply: FastifyReply
) {}
