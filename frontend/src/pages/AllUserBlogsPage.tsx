import { NoteAdd, Notes} from "@mui/icons-material";
import { Button, Stack, Typography, Paper, Box} from "@mui/material";

function AllUserBlogsPage() {
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
    
  </>
  )
}

export default AllUserBlogsPage;
