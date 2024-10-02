import { loginService, registerService } from "../services/authService";
import { FastifyRequest, FastifyReply } from "fastify";

export const authN = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    await req.jwtVerify();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login failed:", error);
      return res.status(401).send({
        message: "Authorization failed",
        error: error.message,
      });
    } else {
      console.error("Unknown error:", error);
      return res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
};

export const authZ = async (req: FastifyRequest, res: FastifyReply) => {
  try {
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login failed:", error);
      return res.status(401).send({
        message: "Authentication failed",
        error: error.message,
      });
    } else {
      console.error("Unknown error:", error);
      return res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
};

export const login = async (req: FastifyRequest, res: FastifyReply) => {
  const { username, password } = req.body as {
    username: string;
    password: string;
  };

  if (!username || !password) {
    return res
      .status(400)
      .send({ message: "Username and password are required" });
  }

  try {
    const data = await loginService(username, password);
    return res.status(200).send({ message: "Login successful", data });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login failed:", error);
      return res.status(401).send({
        message: "Login failed",
        error: error.message,
      });
    } else {
      console.error("Unknown error:", error);
      return res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
};

export const register = async (req: FastifyRequest, res: FastifyReply) => {
  const { username, password, email } = req.body as {
    username: string;
    password: string;
    email: string;
  };

  if (!username || !password || !email) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  try {
    const data = await registerService(username, password, email);
    return res
      .status(201)
      .send({ message: "User registered successfully", data });
  } catch (error) {
    if (error instanceof Error) {
      console.error("User registration failed:", error);
      return res.status(400).send({
        message: "User registration failed",
        error: error.message,
      });
    } else {
      console.error("Unknown error:", error);
      return res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
};
