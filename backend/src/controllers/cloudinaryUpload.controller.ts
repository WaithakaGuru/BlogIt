import { Response, Request } from "express";
import cloudinary from "../utils/cloudinary.ts";

export default function cloudinaryUpload(_req: Request, res: Response){
    const timestamp = Math.round(Date.now() / 1000);
    const folder = "user_images_uploads";

    const signature = cloudinary.utils.api_sign_request(
        {timestamp, folder},
        process.env.CLOUDINARY_API_SECRET!
    );

    return res.json({
        timestamp, signature, folder, apiKey: process.env.CLOUDINARY_API_KEY,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME
    })
}