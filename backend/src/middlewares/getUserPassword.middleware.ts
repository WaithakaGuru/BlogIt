import { Request, Response, NextFunction } from "express";
import client from "../utils/PrismaUtils.ts";

export default async function getUserPassword(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = res.locals.user;
  try {
    const pass = await client.user.findFirst({
      where: { id },
      select: { password: true },
    });
    if (pass) {
      res.locals.pass = pass;
      next();
    }
  } catch (err) {
    res.status(500).json({ message: "Server error!!" });
  }
}
