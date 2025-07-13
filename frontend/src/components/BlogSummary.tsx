import { Card, Typography, CardMedia, Avatar, Stack } from '@mui/material'
import { Email } from '@mui/icons-material'
import { Link } from 'react-router-dom'

type BlogAuthorType = {
    userName: string,
    email: string
}

type BlogInfoType = {
    blogAuthor: BlogAuthorType,
    synopsis: string,
    featuredImageURL: string,
    creationDate: string,
    title: string
    id: string
}


function BlogSummary(blog:BlogInfoType) { 
  return (
    <Card  sx={{maxWidth: "25rem", height: "23rem", position: "relative"}}>
        <CardMedia component={"img"} image={blog.featuredImageURL} 
        sx={{maxHeight: "55%"}} 
        />
        <Typography variant="h6" m={0} px={2} gutterBottom fontFamily={"cursive"}>
            <Link to={blog.id}>
                {blog.title}
            </Link>
        </Typography>
        <Typography variant="body1" px={2} my={1} color="textSecondary">
            {blog.synopsis}
        </Typography>
        <Typography variant="body1" px={2} mt={1} alignItems={"center"} 
            display={"flex"} fontFamily={"cursive"} color='secondary'
        >
            <Avatar component={"b"} sx={{color:"", bgcolor: "#8B5CF6", fontFamily:"cursive",
            mr:1, height: "2rem", width: "2rem"}}
            >
            {blog.blogAuthor.userName[0]}
            </Avatar> 
            {blog.blogAuthor.userName}
        </Typography>
        <Stack direction={{xs: "column", sm:"row"}} justifyContent={"space-between"} px={1}>
            <Typography variant="body2" color="secondary" 
            display={"flex"} alignItems={"center"}
            >
            <Email/> {blog.blogAuthor.email}
            </Typography>
            <Typography variant="caption" fontFamily={"cursive"}
            fontWeight={500} fontSize={".9rem"} color="secondary" 
            gutterBottom my={1}
            >
            Created on: {blog.creationDate.split("T")[0]}
            </Typography>
        </Stack>
    </Card>
  )
}

export default BlogSummary