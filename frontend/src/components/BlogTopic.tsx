import { East } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

function BlogTopic({ blog }: { blog: { title: string; info: string } }) {
  return (
    <Box
      border={"1px solidrgb(147, 186, 249)"}
      borderRadius={".5rem"}
      sx={{
        px: 2,
        py: 1,
        maxWidth: "15rem",
        boxShadow:
          "inset 1px 1px 5px rgba(26, 149, 251, .4), inset -4px -4px 2px rgba(209, 208, 205, 0.4), 0 0 4px rgba(0,0,0,.1)",
        height: "13rem",
      }}
    >
      <Typography
        variant="h6"
        align="center"
        color={purple[500]}
        textTransform={"capitalize"}
        sx={{
          background: `linear-gradient(45deg, color-mix(in srgb, orange 10%, rgb(26, 149, 251) 90%) 40%, orange 20%, #8B5CF6)`,
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
          fontSize: "1.5rem",
          display: "inlineblock",
        }}
      >
        {blog.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {blog.info}
      </Typography>
      <Button
        endIcon={<East />}
        sx={{ bgcolor: "peachpuff", m: 1 }}
        color="warning"
      >
        Learn More
      </Button>
    </Box>
  );
}
export default BlogTopic;
