import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { configDotenv } from "dotenv";

configDotenv();

export default function verifyUserWebToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const jwtKey = process.env.SECRET_KEY;
  try {
    const token = req.cookies.token || req.body.userToken;
    if (!token) {
      res.status(500).json({ message: "No user token found!!" });
      return;
    }
    const decodedTokenData = jwt.verify(token, jwtKey!);
    res.locals.user = decodedTokenData;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
