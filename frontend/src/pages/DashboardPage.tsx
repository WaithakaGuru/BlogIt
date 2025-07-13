import {Box, Stack, Typography } from "@mui/material";
import { useGetAllBlogs } from "../service/FetchAllBlogs";
import BlogSummary from "../components/BlogSummary";


function DashboardPage() {
  const {data} =  useGetAllBlogs();
  return(
    <Box bgcolor={"#f9f9f9"} px={"2rem"}>
    Dashboard
    <Stack direction={{xs: "column", md:"row"}}>

      
    </Stack>

    <Stack p={3} bgcolor={"#f1f1f1"} m={1} >
      <Typography variant="h4" gutterBottom pb={2} align="left" color="secondary">
        Recent Popular Blogs
      </Typography>
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
