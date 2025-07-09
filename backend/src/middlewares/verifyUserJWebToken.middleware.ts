import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { configDotenv } from 'dotenv';

configDotenv()

export default async function verifyUserWebToken(req: Request, res: Response, next: NextFunction){
    const jwtKey = process.env.SECRET_KEY
    try{
        const {token} = req.cookies;
        if (!token || !jwtKey) {
            res.status(500).json({ message: "No user token found!!" });
            return
        }
        const decodedTokenData = jwt.verify(token,  jwtKey);
        if(decodedTokenData) {
            console.log(decodedTokenData);
            next();
        }
        else return;
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Something went wrong!!" });
    }
}