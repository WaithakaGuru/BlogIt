import { Avatar, Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import { useGetAllBlogs } from "../service/FetchAllBlogs";
import BlogSummary from "../components/BlogSummary";
import { Link } from "react-router-dom";
import { Email } from "@mui/icons-material";

function DashboardPage() {
  const {data} =  useGetAllBlogs();
  console.log(data);
  return(
    <Box bgcolor={"#f9f9f9"}>
    Dashboard
      <Typography variant="h4" gutterBottom align="left" color="secondary">
        Recent Popular Blogs
      </Typography>
    <Stack p={3} bgcolor={"#f1f1f1"} m={1} >
      {
        data?.map((blog:any)=> (
          <BlogSummary key={blog.id} {...blog}/>
        ))
      }
    </Stack>
    </Box>
  )
}

export default DashboardPage;
