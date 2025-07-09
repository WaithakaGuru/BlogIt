import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv()


function createUserJWebToken(req: Request, res: Response, next: NextFunction){
    const jwtKey = process.env.SECRET_KEY
    const userInfo = res.locals.userInfo;
    if (!userInfo || !jwtKey) {
        res.status(500).json({ message: "User info or key missing" });
        return
    }
    const {password, email, ...userTokenInfo} = userInfo;
    const userToken = jwt.sign(userTokenInfo, jwtKey)
    res.cookie('token', userToken);
    req.body.userToken = userToken;
    next();
}
export default createUserJWebToken;