import { NoteAdd, Notes} from "@mui/icons-material";
import { Button, Stack, Typography, Paper} from "@mui/material";
import BlogSummary from "../components/BlogSummary";
import { useGetUserBlogs } from "../service/FetchAllBlogs";

function AllUserBlogsPage() {
  const {data: allUserBlogs} = useGetUserBlogs();
  const data = allUserBlogs
  
  return (
  <>
    <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          bgcolor: "#f9f9f9",
          width: {xs: "100%", sm: "90%"},
          margin: "0 auto",
          mt: 4,
        }}
    >
      <Stack spacing={3}>
        <Stack direction="row" alignItems="center" gap={1} justifyContent={"space-between"}>
          <Stack direction={"row"} gap={1}>
            <Notes fontSize="large" color="secondary" />
            <Typography variant="h4" fontWeight="bold" color="secondary">
              View
              A Listing of all Your Blogs
            </Typography>
          </Stack>
          <Button endIcon={ <NoteAdd/>} variant="contained" href="blogs/create"
          color="secondary" size="large">
            <Typography variant="body2" sx={{textWrap: "nowrap"}}>new Blog</Typography>
          </Button>
        </Stack>

        <Typography variant="body1" color="text.secondary">
          Share your thoughts with the world — start by giving your blog a title
          and then dive into your content.
        </Typography>
      </Stack>
    </Paper>
    <Stack p={3} bgcolor={"#f1f1f1"} m={1} direction={{xs: "column", md: "row"}} spacing={2}>
      {
        data?.map((blog:any)=> (
          <BlogSummary key={blog.id} {...blog}/>
        ))
      }
    </Stack>
  </>
  )
}

export default AllUserBlogsPage;
