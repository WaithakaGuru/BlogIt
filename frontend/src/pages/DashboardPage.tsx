import { Avatar, Box, IconButton, Stack, Typography, Paper } from "@mui/material";
import {
  useGetAllBlogs,
  useGetCurrentUserInfo,
} from "../service/FetchAllBlogs";
import BlogSummary from "../components/BlogSummary";
import { Edit } from "@mui/icons-material";
import NoBlogsCard from "../components/NoBlogCard";

function DashboardPage() {
  const { data } = useGetAllBlogs();
  const { data: userInfo } = useGetCurrentUserInfo();

  return (
    <Box bgcolor={"#f9f9f9"} px={"1rem"}>
      <Paper
        elevation={4}
        sx={{
          p: 5,
          borderRadius: 4,
          background: "linear-gradient(135deg, #7b2ff7 0%, #f107a3 100%)", // Vibrant gradient
          width: { xs: "100%", sm: "90%" },
          minHeight: "20rem",
          margin: "0 auto",
          mt: 4,
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          color: "#fff",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          // flexWrap="wrap"
        >
          <Typography
            variant="h4"
            fontWeight={700}
            lineHeight={1.4}
            sx={{
              maxWidth: { xs: "100%", md: "50%" },
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            BlogIt Dashboard: Your Workspace to Air Out Stories in Writing
          </Typography>
         
          <Stack
            direction="column"
            spacing={2}
            sx={{
              borderLeft: { xs: "none", md: "2px dashed rgba(255,255,255,0.5)" },
              pl: { xs: 0, md: 3 },
              width: { xs: "100%", md: "50%" },
              bgcolor: "rgba(255,255,255,0.1)",
              borderRadius: 3,
              p: 2,
            }}
          >
            <Box display="flex" alignItems="center" gap={2} mb={2} p={2}>
              <Avatar
                sx={{
                  bgcolor: "#4B0082",
                  width: 80,
                  height: 80,
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  fontWeight: 600,
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                {userInfo?.data.firstName[0]}
                {userInfo?.data.lastName[0]}
              </Avatar>

              <Typography
                variant="h5"
                sx={{
                  textDecoration: "underline double",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Profile Info
              </Typography>

              <IconButton title="Edit Profile" href="/dashboard/profile">
                <Edit
                  sx={{
                    color: "#fff",
                    bgcolor: "#4B0082",
                    borderRadius: "50%",
                    height: "2.5rem",
                    width: "2.5rem",
                    p: 1,
                    boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </IconButton>
            </Box>

            <Typography variant="body1" pl={1}>
              <strong>Username:</strong> {userInfo?.data.userName}
            </Typography>
            <Typography variant="body1" pl={1}>
              <strong>First Name:</strong> {userInfo?.data.firstName}
            </Typography>
            <Typography variant="body1" pl={1}>
              <strong>Last Name:</strong> {userInfo?.data.lastName}
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <Typography
        variant="h3"
        gutterBottom
        fontWeight={600}
        align="left"
        color="secondary"
        mt="5rem"
      >
        Recent Popular Blogs
      </Typography>
      <Stack
        py={3}
        bgcolor={"#f1f1f1"}
        direction={{ xs: "column", md: "row" }}
        gap={2}
        sx={{ placeContent: "center" }}
        flexWrap={"wrap"}
        width={"100%"}
      >
        {data?.map((blog: any) => <BlogSummary key={blog.id} {...blog} />)}
      </Stack>
      {!data?.data && (
        <NoBlogsCard/>
      )}
    </Box>
  );
}

export default DashboardPage;
