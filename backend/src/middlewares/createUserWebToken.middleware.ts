import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv()


function createUserJWebToken(_req: Request, res: Response){
    const jwtKey = process.env.SECRET_KEY
    const userInfo = res.locals.userInfo;
    if (!userInfo || !jwtKey) {
        res.status(500).json({ message: "User info or key missing" });
        return
    }
    const {password, email, ...userTokenInfo} = userInfo;
    const userToken = jwt.sign(userTokenInfo, jwtKey)
    res.cookie('token', userToken, {maxAge: 24000*60*60, signed: true});
}
export default createUserJWebToken;