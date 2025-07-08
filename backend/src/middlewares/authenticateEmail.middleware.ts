import {Request, Response, NextFunction} from 'express';
import client from '../utils/PrismaUtils.ts';

export default async function authenticateEmail(req:Request, res:Response, next:NextFunction) {
    try{
        const enteredEmail = req.body.email;
        const emailExists = await client.user.findFirst({
            where: {email: enteredEmail}
        })
        if(emailExists){
            res.status(400).json({message: "Email Must be unique"})
            return;
        }
        next();
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong! Try again in a few!!"});
    }
}