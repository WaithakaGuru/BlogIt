import { Request, Response } from "express";

export default function (req: Request, res: Response) {
  res.clearCookie("token");
  req.body.userToken = null;
  res.locals.user = null;
}
