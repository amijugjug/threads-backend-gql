import { verifyToken } from "../utils/utilities";
import { Request, Response } from "express";

export const authMiddleware = async ({
  req,
  res,
}: {
  req: Request;
  res: Response;
}) => {
  try {
    const token = req.headers?.authorization;

    if (!token) throw new Error("Please provide a valid token");

    const user = verifyToken(token as string);

    return { user };
  } catch (error) {
    return {};
  }
};
