import { Request, Response } from "express";

export default function logoutUser(req: Request, res: Response) {
  req.body.userToken = null;
  res.locals.user = null;
  res.json({ token: "" });
}
