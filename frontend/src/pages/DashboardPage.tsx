import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import {
  useGetAllBlogs,
  useGetCurrentUserInfo,
} from "../service/FetchAllBlogs";
import BlogSummary from "../components/BlogSummary";
import { Edit } from "@mui/icons-material";

function DashboardPage() {
  const { data } = useGetAllBlogs();
  const { data: userInfo } = useGetCurrentUserInfo();

  return (
    <Box bgcolor={"#f9f9f9"} px={"1rem"}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        my={4}
        bgcolor="#8653fcff"
        p={4}
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        width="100%"
        borderRadius={2}
        boxShadow={2}
        height={"20rem"}
      >
        <Typography
          variant="h4"
          gutterBottom
          maxWidth={{ xs: "100%", md: "50%" }}
          fontWeight={600}
          lineHeight={1.4}
          color="#fff"
        >
          BlogIt Dashboard: Your Workspace to Air Out Stories in Writing
        </Typography>

        <Stack
          direction="column"
          spacing={2}
          sx={{
            borderLeft: { xs: "none", md: "2px solid #ccc" },
            pl: { xs: 0, md: 3 },
            width: { xs: "100%", md: "50%" },
          }}
          color="#fff"
        >
          <Box
            component="section"
            display="flex"
            alignItems="center"
            gap={2}
            mb={2}
          >
            <Avatar
              sx={{
                bgcolor: "darkslateblue",
                width: 80,
                height: 80,
                fontSize: "2rem",
                fontFamily: "cursive",
                fontWeight: 600,
              }}
            >
              {userInfo?.data.userInfo.firstName[0]}
              {userInfo?.data.userInfo.lastName[0]}
            </Avatar>

            <Typography
              variant="h4"
              sx={{ textDecoration: "underline", fontWeight: 500 }}
            >
              Profile Info
            </Typography>
            <IconButton title="Edit Profile" href="/dashboard/profile">
              <Edit
                sx={{
                  position: "relative",
                  right: 0,
                  cursor: "pointer",
                  color: " #fff",
                  bgcolor: "darkslateblue",
                  borderRadius: "50%",
                  height: "3rem",
                  width: "3rem",
                }}
              />
            </IconButton>
          </Box>

          <Typography variant="body1">
            <strong>Username:</strong> {userInfo?.data.userInfo.userName}
          </Typography>
          <Typography variant="body1">
            <strong>First Name:</strong> {userInfo?.data.userInfo.firstName}
          </Typography>
          <Typography variant="body1">
            <strong>Last Name:</strong> {userInfo?.data.userInfo.lastName}
          </Typography>
        </Stack>
      </Stack>

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
        sx={{placeContent: "center"}}
        flexWrap={"wrap"}
        width={"100%"}
      >
        {data?.map((blog: any) => <BlogSummary key={blog.id} {...blog} />)}
      </Stack>
    </Box>
  );
}

export default DashboardPage;
