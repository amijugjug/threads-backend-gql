import { verifyToken } from "../utils/utilities";
import { Request, Response } from "express";

export const authMiddleware = async ({
  req,
  res,
}: {
  req: Request;
  res: Response;
}) => {
  const token = req.headers["Authorization"];

  try {
    console.log("token : ", token);
    const user = verifyToken(token as string);
    console.log("user : ", user);
    return { user };
  } catch (error) {
    return {};
  }
};
