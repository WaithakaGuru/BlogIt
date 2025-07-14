import { EditNote, NoteAdd, Notes } from "@mui/icons-material";
import {
  Button,
  Stack,
  Typography,
  Paper,
  Card,
  Avatar,
  CardMedia,
  Divider,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useGetUserBlogs } from "../service/FetchAllBlogs";

function AllUserBlogsPage() {
  const { data: allUserBlogs } = useGetUserBlogs();
  const data = allUserBlogs;

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          p: 5,
          borderRadius: 4,
          background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
          width: { xs: "100%", sm: "90%" },
          minHeight: "24rem",
          margin: "0 auto",
          mt: 6,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <Stack spacing={4}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            gap={2}
          >
            <Stack direction="row" gap={1} alignItems="center">
              <Notes fontSize="large" color="secondary" />
              <Typography
                variant="h4"
                fontWeight={700}
                color="secondary"
                sx={{ textShadow: "0 1px 1px rgba(0,0,0,0.1)" }}
              >
                Your Blog Dashboard
              </Typography>
            </Stack>

            <Button
              endIcon={<NoteAdd />}
              variant="contained"
              href="blogs/create"
              color="secondary"
              size="large"
              sx={{
                px: 3,
                py: 1,
                fontWeight: "bold",
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                Create New Blog
              </Typography>
            </Button>
          </Stack>

          <Typography variant="body1" color="text.secondary">
            Ready to share your ideas? Use the button above to create a new blog
            post. Craft your message, style your content, and inspire others
            with your insights.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              bgcolor: "rgba(255,255,255,0.6)",
              p: 3,
              borderRadius: 3,
              border: "1px dashed #bbb",
              mt: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Need Inspiration?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Browse trending topics, read community blogs, or revisit your past
              posts to spark new ideas.
            </Typography>
          </Paper>
        </Stack>
      </Paper>

      <Stack
        p={3}
        bgcolor={"#f5f5f5ff"}
        my={6}
        direction={{ xs: "column", md: "row" }}
        flexWrap={"wrap"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        width="98%"
        mx={"auto"}
      >
        {data?.map((blog: any) => (
          <Card
            sx={{
              width: "26rem",
              height: "32rem",
              position: "relative",
              minWidth: { xs: "100%", sm: "20rem", md: "22rem" },
              m: ".2rem",
              bgcolor: "rgba(255,255,255,0.1)",
            }}
            key={blog.id}
          >
            <Button
              endIcon={<EditNote />}
              color="secondary"
              size="large"
              href={`/dashboard/blogs/create/${blog.id}`}
              title="Edit this Blog"
              sx={{
                textTransform: "none",
                position: "absolute",
                right: "1rem",
                bottom: "47%",
              }}
              variant="contained"
            >
              Edit
            </Button>
            <CardMedia
              component={"img"}
              image={blog.featuredImageURL}
              sx={{ maxHeight: "55%" }}
            />
            <Typography
              variant="h6"
              mb={2}
              px={2}
              gutterBottom
              fontFamily={"cursive"}
            >
              <Link to={`${blog.id}`}>
                <Typography color="#8653fcff" fontSize={"1.2rem"}>
                  {blog.title}
                </Typography>
              </Link>
            </Typography>
            <Typography
              variant="body1"
              px={2}
              my={1}
              color="textSecondary"
              height={"4rem"}
              overflow={"auto"}
            >
              {blog.synopsis}
            </Typography>
            <Divider />
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              width={"90%"}
              pt={"1rem"}
              sx={{ placeSelf: "center" }}
              height={"6rem"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} p={1}>
                <Avatar
                  component={"b"}
                  sx={{
                    color: "",
                    bgcolor: "#8B5CF6",
                    fontFamily: "cursive",
                    height: "3rem",
                    width: "3rem",
                  }}
                >
                  {blog.blogAuthor.userName[0]}
                </Avatar>
                <Stack justifyContent={"space-around"} px={1}>
                  <Typography
                    variant="body1"
                    alignItems={"center"}
                    display={"flex"}
                    fontFamily={"cursive"}
                    fontWeight={600}
                    fontSize={"1.2rem"}
                    color="secondary"
                  >
                    {blog.blogAuthor.userName}
                  </Typography>
                  <Typography
                    variant="caption"
                    fontWeight={"bold"}
                    color="textSecondary"
                    display={"flex"}
                    alignItems={"center"}
                  >
                    {blog.blogAuthor.email.toLowerCase()}
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                variant="subtitle1"
                fontFamily={"cursive"}
                fontWeight={600}
                color="secondary"
                gutterBottom
                my={1}
              >
                {blog.creationDate.split("T")[0]}
              </Typography>
            </Box>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default AllUserBlogsPage;
