import { EditNote, NoteAdd, Notes } from "@mui/icons-material";
import {
  Button,
  Stack,
  Typography,
  Paper,
  Card,
  Avatar,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Email } from "@mui/icons-material";
import { useGetUserBlogs } from "../service/FetchAllBlogs";

function AllUserBlogsPage() {
  const { data: allUserBlogs } = useGetUserBlogs();
  const data = allUserBlogs;

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          bgcolor: "#f9f9f9",
          width: { xs: "100%", sm: "90%" },
          margin: "0 auto",
          mt: 4,
        }}
      >
        <Stack spacing={3}>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} gap={1}>
              <Notes fontSize="large" color="secondary" />
              <Typography variant="h4" fontWeight="bold" color="secondary">
                View A Listing of all Your Blogs
              </Typography>
            </Stack>
            <Button
              endIcon={<NoteAdd />}
              variant="contained"
              href="blogs/create"
              color="secondary"
              size="large"
            >
              <Typography variant="body2" sx={{ textWrap: "nowrap" }}>
                new Blog
              </Typography>
            </Button>
          </Stack>

          <Typography variant="body1" color="text.secondary">
            Share your thoughts with the world — start by giving your blog a
            title and then dive into your content.
          </Typography>
        </Stack>
      </Paper>
      <Stack
        p={3}
        bgcolor={"#f1f1f1"}
        my={6}
        direction={{ xs: "column", md: "row" }}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
        width={{ sm: "95%", md: "90%" }}
        mx={"auto"}
      >
        {data?.map((blog: any) => (
          <Card
            sx={{
              maxWidth: {xs: "25rem", md: "23rem"},
              height: "24.5rem",
              position: "relative",
              minWidth: { xs: "100%", sm: "20rem", md: "22rem" },
              m: ".2rem",
            }}
            key={blog.id}
          >
            <Button endIcon={<EditNote/>} color="secondary" size="large" href={`/dashboard/blogs/create/${blog.id}`} title="Edit this Blog"
             sx={{textTransform: "none", position: "absolute", right: 0, bottom: "45%"}} variant="contained">
             Edit
            </Button>
            <CardMedia
              component={"img"}
              image={blog.featuredImageURL}
              sx={{ maxHeight: "55%" }}
            />
            <Typography
              variant="h6"
              m={0}
              px={2}
              gutterBottom
              fontFamily={"cursive"}
            >
              <Link to={`${blog.id}`}>{blog.title}</Link>
            </Typography>
            <Typography
              variant="body1"
              px={2}
              my={1}
              color="textSecondary"
              maxHeight={"4rem"}
              overflow={"auto"}
            >
              {blog.synopsis}
            </Typography>
            <Typography
              variant="body1"
              px={2}
              alignItems={"center"}
              gutterBottom
              display={"flex"}
              fontFamily={"cursive"}
              color="secondary"
            >
              <Avatar
                component={"b"}
                sx={{
                  color: "",
                  bgcolor: "#8B5CF6",
                  fontFamily: "cursive",
                  mr: 1,
                  height: "2rem",
                  width: "2rem",
                }}
              >
                {blog.blogAuthor.userName[0]}
              </Avatar>
              {blog.blogAuthor.userName}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              gap={1}
              justifyContent={"center"}
              px={1}
            >
              <Typography
                variant="body2"
                color="secondary"
                display={"flex"}
                alignItems={"center"}
              >
                <Email /> {blog.blogAuthor.email}
              </Typography>
              <Typography
                variant="caption"
                fontFamily={"cursive"}
                fontWeight={500}
                fontSize={".9rem"}
                color="secondary"
                gutterBottom
                my={1}
              >
                Created on: {blog.creationDate.split("T")[0]}
              </Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default AllUserBlogsPage;
