 import hashPassword from "../utils/hashPassword";
import client from "../utils/PrismaUtils";
import { Request, Response } from "express";

export default async function updatePassword(req: Request, res: Response) {
    const {id} = res.locals.user;
    const pass = res.locals.userPass;
    // const {currentPassword, newPassword} = req.body;
    try{
        const hashedPassword = hashPassword(pass);
        const updatedPassword = await client.user.update({
            where:{id},
            data: {password: hashedPassword}
        })
        if(updatedPassword) res.status(201).json(updatedPassword)
    }catch(err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error!!"})
    }
}