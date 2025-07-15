import "../styles/index.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import { East } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import blogCategories from "../utils/blogTopics";
import BlogTopic from "../components/BlogTopic";

function HomePage() {
  return (
    <>
      <Stack
        p={3}
        sx={{ mx: "auto", width: { xs: "97%", md: "88%" } }}
        direction={{ xs: "column", md: "row" }}
        gap={1}
        m={2}
      >
        <Box minWidth={{ xs: "80%", sm: "53%" }}>
          <Typography
            variant="body1"
            color="textPrimary"
            fontWeight={500}
            gutterBottom
            fontSize={"1.5rem"}
          >
            Express your success stories
          </Typography>
          <Typography
            variant="h6"
            fontSize={"3rem"}
            fontWeight={600}
            textTransform={"capitalize"}
            gutterBottom
            lineHeight={"1.3cm"}
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
              background:
                "linear-gradient(45deg, darkorange 10%, color-mix(in srgb, orange 10%, rgb(26, 149, 251) 90%) 30%,  #8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Custom blog platform to help you air out your experiences
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color="#8B5CF6"
            fontSize={"2rem"}
            textTransform={"capitalize"}
          >
            saving you countless hours
          </Typography>
          <Typography
            variant="subtitle2"
            fontSize={"1.1rem"}
            gutterBottom
            fontFamily={"Montserrat"}
            sx={{
              fontSize: { md: "1.3rem", xs: "1rem" },
              fontWeight: "bold",
              background: `linear-gradient(45deg, #8B5CF6 5% ,  #3B82F6 ,  #8B5CF6)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            <strong style={{ fontSize: "1.4rem" }}>BlogIt</strong> is a modern,
            user-friendly blog platform designed to empower writers, creators,
            and thought leaders to share their stories, insights, and expertise
            with the world. Whether you're a casual blogger, professional
            journalist, or content marketer, our platform provides the tools you
            need to write, publish, and grow your audience effortlessly.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<East />}
            href="/register"
            sx={{
              zIndex: 1,
              my: 2,
              background: "linear-gradient(to right, #3B82F6, #8B5CF6)",
            }}
          >
            Create Account
          </Button>
        </Box>
        <Box
          component={"img"}
          src="BlogItTransparent1.png"
          height={{ xs: "16rem", md: "25rem" }}
          minWidth={{ xs: "28rem" }}
          maxWidth={{ xs: "35rem", sm: "48rem", md: "33rem" }}
          mx={0}
          my={"auto"}
          boxShadow={
            "inset 12px 12px 255px rgba(207, 207, 207, 0.1), inset -12px -12px 25px rgba(207, 207, 207, 0.1)"
          }
          sx={{
            objectFit: { md: "contain", sm: "cover" },
            objectPosition: "center",
            background:
              "linear-gradient(135deg, #420e95ff 0%, #f107a3 100%)",
          }}
        />
      </Stack>
      <Stack bgcolor={"#f9f9f9"} px={{ xs: 1, md: 4 }} mt={4} pt={4}>
        <Box>
          <Typography
            variant="h3"
            mt={{ xs: -1, md: "auto" }}
            color={purple[800]}
            fontWeight={600}
            align="center"
          >
            Explore new ideas
          </Typography>
          <Typography
            variant="h3"
            fontWeight={600}
            maxWidth={"max-content"}
            align="center"
            p={1}
            mx={"auto"}
            sx={{
              background: `linear-gradient(45deg, color-mix(in srgb, orange 10%, rgb(26, 149, 251) 90%) 40%, orange 20%, #8B5CF6)`,
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              fontSize: "2.5rem",
              display: "inlineblock",
            }}
          >
            In Numerous topics
          </Typography>
        </Box>
        <Stack
          bgcolor={"#fff"}
          width={"95%"}
          overflow={"auto"}
          borderRadius={2}
          zIndex={1}
          maxHeight={"35rem"}
          mx={"auto"}
          boxShadow={{
            xs: "inset 4rem 0 1rem rgba(59, 131, 246, 0.2), inset -2rem 0 3rem rgba(59, 131, 246, 0.2)",
            md: "inset 4rem 0 4rem rgba(59, 131, 246, 0.2), inset -2rem 0 3rem rgba(59, 131, 246, 0.2)",
          }}
          direction={"row"}
          position={"relative"}
        >
          <Stack
            direction={"row"}
            overflow={"auto"}
            position={"relative"}
            p={1}
            m={2}
            minWidth={"180%"}
            mx={"2"}
            flexWrap={"wrap"}
            gap={2}
            justifyContent={"center"}
          >
            {blogCategories.map((category, idx) => (
              <BlogTopic blog={category!} key={idx} />
            ))}
          </Stack>
        </Stack>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          fontSize={"1.5rem"}
          mt={4}
        >
          If you wanna share it, BlogIt 🫵🫡
        </Typography>
        <Button
          variant="contained"
          endIcon={<East />}
          href="register"
          sx={{
            textTransform: "none",
            fontFamily: "Montserrat",
            borderRadius: "1rem",
            width: "50%",
            minWidth: "max-content",
            fontSize: "1.3rem",
            bgcolor: ` #8B5CF6`,
            mx: "auto",
            px: 3,
            py: 1,
            mb: 8,
            mt: 4,
          }}
        >
          Set up a Free BlogIt Account
        </Button>
      </Stack>
    </>
  );
}

export default HomePage;

/**
 * common types 
 * 
 * | Event Handler       | Type                                   |
| ------------------- | -------------------------------------- |
| `onChange` (input)  | `React.ChangeEvent<HTMLInputElement>`  |
| `onClick` (button)  | `React.MouseEvent<HTMLButtonElement>`  |
| `onSubmit` (form)   | `React.FormEvent<HTMLFormElement>`     |
| `onChange` (select) | `React.ChangeEvent<HTMLSelectElement>` |
| `onFocus`           | `React.FocusEvent<HTMLInputElement>`   |

 */
