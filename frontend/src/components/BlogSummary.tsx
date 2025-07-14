import { Card, Typography, CardMedia, Avatar, Stack, Divider, Box } from "@mui/material";
import { Link } from "react-router-dom";

type BlogAuthorType = {
  userName: string;
  email: string;
  id?: string;
};

type BlogInfoType = {
  blogAuthor: BlogAuthorType;
  synopsis: string;
  featuredImageURL: string;
  creationDate: string;
  title: string;
  id: string;
};

function BlogSummary(blog: BlogInfoType) {
  return (
    <Card
      sx={{
        maxWidth: "27rem",
        height: "32rem",
        position: "relative",
        minWidth: { xs: "100%", sm: "auto" },
        mt: 1,
        flexWrap: "wrap",
      }}
    >
      <CardMedia
        component={"img"}
        image={blog.featuredImageURL}
        sx={{ maxHeight: "52%" }}
      />
      <Typography variant="h6" mb={2} px={2} gutterBottom fontFamily={"cursive"} >
        <Link to={`blogs/${blog.id}`}><Typography
           color="#8653fcff" fontSize={"1.2rem"}
        >
          {blog.title}
        </Typography></Link>
      </Typography>
      <Typography
        variant="body1"
        px={2}
        mb={1}
        color="textSecondary"
        height={"4.5rem"}
        overflow={"auto"}
        borderTop={"1px solid #8653fcff"}
      >
        {blog.synopsis}
      </Typography>
      <Divider/>
      <Box display={"flex"} alignItems={"flex-start"} width={"90%"} pt={"1rem"}
       sx={{placeSelf: "center"}} height={"6rem"} justifyContent={"space-between"}>
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
          <Stack
            justifyContent={"space-around"}
            px={1}
          >
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
  );
}

export default BlogSummary;
