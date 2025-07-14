import verifyNameEmail from "../middlewares/verifyNameEmail.middleware.ts";
import client from "../utils/PrismaUtils.ts";
import { Request, Response } from "express";

export default async function updateUserInfo(req: Request, res: Response) {
  const { id } = res.locals.user;
  const { userName, firstName, lastName, email } = req.body;
  try {
    const updatedUser = await client.user.update({
      where: { id },
      data: { userName, firstName, lastName, email },
    });
    if (updatedUser) res.status(201).json(updatedUser);
    else res.status(400).json({ message: "User update Failed!!" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!!" });
  }
}
