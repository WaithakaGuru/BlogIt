import client from "../utils/PrismaUtils.ts";
import { NextFunction, Request, Response } from "express";

export default async function verifyIdentifier(req: Request, res: Response) {
  try {
    const { identifier } = req.body;
    const validIdentifier = await client.user.findFirst({
      where: {
        OR: [{ userName: identifier }, { email: identifier }],
      },
    });
    if (validIdentifier) return validIdentifier;
    res.status(400).json({ message: "Wrong login credentials" });
    return;
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Something is not working! please Login later!!" });
  }
}
