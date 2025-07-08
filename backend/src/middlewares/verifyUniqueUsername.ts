import { Request, Response, NextFunction } from "express";
import client from "../utils/PrismaUtils";

export default async function verifyUniqueUsername(req: Request, res:Response, next: NextFunction){
    try{
        const enteredUsername = req.body.userName;
        const usernameExists = await client.user.findFirst({
            where: {userName: enteredUsername}
        })
        if(usernameExists){
            res.status(400).json({message: "Username exists! Enter a unique username!"})
            return
        }
        next();
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong try again later!!"})
    }

}