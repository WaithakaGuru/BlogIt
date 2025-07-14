import { NextFunction, Request, Response } from "express";
import client from "../utils/PrismaUtils";

export default async function verifyNameEmail(req: Request, res: Response, next: NextFunction) {
  try {
    const {id} = res.locals.user;
    const { userName, email } = req.body;
    const validIdentifier = await client.user.findFirst({
      where: {
        OR: [{ userName }, { email }],
        NOT: {id}
      },
    });
    if (validIdentifier) {
        return res.status(400).json({ message: "Email and Username Must be unique" });}
    next();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Something is not working! Update profile later :)" });
  }
}
