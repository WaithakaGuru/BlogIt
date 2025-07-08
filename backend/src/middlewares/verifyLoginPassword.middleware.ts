import { Request, Response, NextFunction } from "express";
import verifyIdentifier from "./verifyIdentifier.middleware.ts";
import verifyPassword from "../utils/verifyPassword.ts";

export default async function verifyLoginPassword(req: Request, res: Response, next: NextFunction){
    try{
        const {enteredPassword} = req.body;
        const hashedPassword = await verifyIdentifier(req, res);
    
        if(hashedPassword) {
            const correctPassword = await verifyPassword(enteredPassword, hashedPassword);
            if(correctPassword) next();
            else{
                res.status(400).json({message: "Wrong login credentials"})
                return;
            }
        }
        res.status(400).json({message: "Wrong login credentials"})
        return;
    }catch(err) {
        console.log(err);
        res.status(500).json({message: "Something is not working! please Login later!!"});
    }
}