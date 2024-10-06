import { PrismaClient } from "@prisma/client";
import { FastifyRequest } from "fastify/types/request";
import { FastifyReply } from "fastify/types/reply";

const prisma = new PrismaClient();

export async function getPositions(
  request: FastifyRequest,
  reply: FastifyReply
) {}

export async function createPosition(
  request: FastifyRequest,
  reply: FastifyReply
) {}

export async function deletePosition(
  request: FastifyRequest,
  reply: FastifyReply
) {}
