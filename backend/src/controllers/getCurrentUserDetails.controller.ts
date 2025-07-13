import verifyUserWebToken from "../middlewares/verifyUserJWebToken.middleware.ts";
import { Request, Response, NextFunction } from "express";

function getCurrentUserDetails (req: Request, res: Response, next: NextFunction) {
    verifyUserWebToken(req, res, next,  true)
}
export default getCurrentUserDetails