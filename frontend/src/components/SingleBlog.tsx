import { Card, CardMedia, Typography, Box } from "@mui/material";
import Markdown from "react-markdown";

type AuthorType = {
  userName: string;
  email: string;
};

type BlogType = {
  blogAuthor?: AuthorType;
  title: string;
  content: string;
  synopsis: string;
  featuredImageURL: string;
  id: string;
  userId?: string;
};

function SingleBlog(blog: BlogType) {
  return (
    <Card
      sx={{
        height: "max-content",
        width: { xs: "95%", sm: "85%", md: "65%" },
        mx: "auto",
        my: 2,
        p: 1,
      }}
      elevation={5}
    >
      <CardMedia
        component={"img"}
        image={blog?.featuredImageURL}
        width={"100%"}
        sx={{ maxHeight: "20rem" }}
      />
      <Markdown>{blog?.title}</Markdown>
      <Box mt={2}>
        <Typography variant="h6" gutterBottom color="secondary">
          Synopsis:
        </Typography>

        <Box p={2} border={1} borderColor="grey.300" borderRadius={2}>
          <Markdown>{blog.synopsis}</Markdown>
        </Box>
      </Box>
      <Box mt={2}>
        <Typography variant="h6" gutterBottom color="secondary">
          The Full Strory:
        </Typography>

        <Box p={2} border={1} borderColor="grey.300" borderRadius={2}>
          <Markdown>{blog.content}</Markdown>
        </Box>
      </Box>
    </Card>
  );
}

export default SingleBlog;
