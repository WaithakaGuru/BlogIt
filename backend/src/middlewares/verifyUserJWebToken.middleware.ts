import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { configDotenv } from "dotenv";

configDotenv();

export default function verifyUserWebToken(
  req: Request,
  res: Response,
  next: NextFunction, 
  withData? :boolean
) {
  const jwtKey = process.env.SECRET_KEY;
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or malformed token" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decodedTokenData = jwt.verify(token, jwtKey!);
    res.locals.user = decodedTokenData;
    withData && res.json({ userInfo: decodedTokenData });
   !withData &&  next();
  } catch (err: any) {
    console.log(err);
    if (err.name === "TokenExpiredError")
      return res.status(401).json({ message: "Token has expired" });
    if (err.name === "JsonWebTokenError")
      return res.status(401).json({ message: "Invalid token" });
    return res.status(500).json({ message: "Token Verification fialed" });
  }
}
