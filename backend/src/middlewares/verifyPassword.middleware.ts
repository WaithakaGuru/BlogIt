import { Request, Response, NextFunction } from "express";
import verifyIdentifier from "./verifyIdentifier.middleware.ts";
import checkPassword from "../utils/verifyPassword.ts";

export default async function verifyPassword(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const password = res.locals.pass;
  try {
    const { currentPassword, newPassword } = req.body;
    if (password) {
      const correctPassword = await checkPassword(currentPassword, password);
      if (correctPassword) {
        res.locals.userPass = newPassword;
        next();
        return;
      } else {
        res.status(400).json({ message: "Wrong Current Password" });
        return;
      }
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Something is not working! please Login later!!" });
  }
}
