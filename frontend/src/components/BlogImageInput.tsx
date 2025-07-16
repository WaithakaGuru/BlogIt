import { useState } from "react";
import { useUploadImage } from "../service/PostRequests";
import BlogComponent from "./BlogContentInput";
import { Alert, Box, Button } from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import axios, { isAxiosError } from "axios";

export default function BlogImageInput () {
    const {mutateAsync: signature} = useUploadImage();
    const [error, setError] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState(null);

    async function handleImageChage(e: React.ChangeEvent<HTMLInputElement>){
        const selectedImage = e.target.files?.[0]
        selectedImage && setImage(selectedImage);
    }

    async function handleImageUpload(){
        if(!image) return;

        try{
            const imageInfo = (await signature()).data;
            const formData = new FormData();
            formData.append("file", image);
            formData.append("api_key", imageInfo.apiKey);
            formData.append('timestamp', imageInfo.timestamp);
            formData.append('signature', imageInfo.signature);
            formData.append('folder', imageInfo.folder);

            const cloudinaryRes = await axios.post(
                `https://api.cloudinary.com/v1_1/${imageInfo.cloudName}/image/upload`,
                formData
            );

            setImageUrl(cloudinaryRes.data.secure_url);
            localStorage.setItem("uploadedImageUrl", cloudinaryRes.data.secure_url)

        }catch(err){
            console.log(err);
            if(isAxiosError(err)){
                setError(err.response?.data.message)
            }
        }
    }

    return(
        <Box>
            {error && <Alert severity="error">{error}</Alert>}
            <BlogComponent name="Featured Image" markDownValue={`![BlogImage](${imageUrl})`} type="file" label="I"
            onChange={handleImageChage}/>
            <Button variant="contained" color="secondary" endIcon={<UploadFile/>} onClick={handleImageUpload}>Upload</Button>
        </Box>
    )
}