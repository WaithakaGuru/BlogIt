import { Request, Response, NextFunction } from "express";
import verifyIdentifier from "./verifyIdentifier.middleware.ts";
import verifyPassword from "../utils/verifyPassword.ts";

export default async function verifyLoginPassword(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { enteredPassword } = req.body;
    const userInfo = await verifyIdentifier(req, res);

    if (userInfo?.password) {
      const correctPassword = await verifyPassword(
        enteredPassword,
        userInfo.password,
      );
      if (correctPassword) {
        res.locals.userInfo = userInfo;
        next();
        return;
      } else {
        res.status(400).json({ message: "Wrong login credentials" });
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
