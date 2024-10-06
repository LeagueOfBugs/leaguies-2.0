import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export async function getSubPositions(
  request: FastifyRequest,
  reply: FastifyReply
) {}

export async function createSubPosition(
  request: FastifyRequest,
  reply: FastifyReply
) {}

export async function deleteSubPosition(
  request: FastifyRequest,
  reply: FastifyReply
) {}
