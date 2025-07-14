import {
  AppRegistration,
  Dashboard,
  Home,
  Login,
  Logout,
  Notes,
  Person,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import useBlog from "../store/Blog.store";
import { useLocation } from "react-router-dom";
import { useLogOutUser } from "../service/PostRequests";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useGetCurrentUserInfo } from "../service/FetchAllBlogs";

function NavBar() {
  const { isLoggedIn, setIsLoggedIn, addToken } = useBlog();
  const path = useLocation().pathname;
  const { mutateAsync: logOutUser } = useLogOutUser();
  const [error, setError] = useState("");
  const { data: userInfo } = useGetCurrentUserInfo(isLoggedIn!);

  async function handleLogOut() {
    setIsLoggedIn(0);
    try {
      const logOut = await logOutUser();
      addToken(logOut.data.token);
      localStorage.setItem("token", "");
    } catch (err) {
      if (isAxiosError(err)) {
        setError(err.response?.data.message || "Unknown error");
      } else {
        console.log(err);
        setError(`Something went wrong.`);
      }
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <Box
          component={"nav"}
          sx={{
            height: "5rem",
            bgcolor: "#f9f9f9",
            display: "flex",
            justifyContent: "space-between",
            position: "sticky",
            boxShadow: "0 0 2px  #3B82F6",
            top: 0,
            zIndex: 2,
          }}
        >
          <Button
            startIcon={<Dashboard />}
            title="BlogIt User DashBoard"
            href="/dashboard"
            variant={path === "/dashboard" ? "contained" : "outlined"}
            sx={{
              maxHeight: "fit-content",
              px: 2,
              mx: 1,
              py: ".85rem",
              placeSelf: "center",
            }}
          >
            <Typography display={{ xs: "none", sm: "flex" }}>BlogIT</Typography>
          </Button>

          <Typography
            variant="subtitle1"
            fontWeight={700}
            fontSize={"1.2rem"}
            lineHeight={".6cm"}
            color="secondary"
            px={2}
            my={"auto"}
            align="center"
          >
            Hello {userInfo?.data.firstName}
          </Typography>

          <Stack direction={"row"} gap={2} p={2}>
            <Button
              href="/"
              variant={path === "/" ? "contained" : "outlined"}
              title="Go to home page"
              sx={{ m: 0, p: 0 }}
            >
              <Home />
            </Button>
            <Button
              startIcon={<Notes />}
              variant={path === "/dashboard/blogs" ? "contained" : "outlined"}
              title="My Blogs"
              href="/dashboard/blogs"
            >
              <Typography display={{ xs: "none", sm: "flex" }}>
                My Blogs
              </Typography>
            </Button>

            <Button
              startIcon={<Person />}
              variant={path === "/dashboard/profile" ? "contained" : "outlined"}
              href="/dashboard/profile"
              title="My profile"
              sx={{ px: 1 }}
            >
              <Typography display={{ xs: "none", sm: "flex" }}>
                My Profile
              </Typography>
            </Button>

            <Button
              endIcon={<Logout />}
              variant="contained"
              color="error"
              title="Log Out"
              onClick={handleLogOut}
              sx={{
                px: 1,
                maxWidth: { xs: "1rem", md: "5rem" },
                ml: { xs: "-.8rem", md: "auto" },
              }}
            >
              <Typography
                display={{ xs: "none", sm: "flex" }}
                fontSize={{ sm: ".6rem", md: ".7rem" }}
              >
                LogOut
              </Typography>
            </Button>
          </Stack>
        </Box>
      ) : (
        <Box
          component={"nav"}
          sx={{
            height: "5rem",
            bgcolor: "#f9f9f9",
            display: "flex",
            justifyContent: "space-between",
            position: "sticky",
            boxShadow: "0 0 2px  #3B82F6",
            top: 0,
            zIndex: 2,
          }}
        >
          <CardMedia
            component={"img"}
            image="BlogLogo.png"
            alt="BlogIt"
            sx={{
              maxWidth: "12rem",
              height: "4rem",
              my: "auto",
            }}
          />

          <Stack direction={"row"} gap={2} p={2}>
            <Button
              href="/"
              color="secondary"
              title="Go to home page"
              variant={path === "/" ? "contained" : "outlined"}
            >
              <Home />
              <Typography display={{ xs: "none", sm: "flex" }}>Home</Typography>
            </Button>

            <Button
              href="/register"
              title="Register New Account"
              sx={{
                background:
                  path === "/register"
                    ? "linear-gradient(to right, #3B82F6, #8B5CF6)"
                    : "",
              }}
              variant={path === "/register" ? "contained" : "outlined"}
            >
              <AppRegistration />
              <Typography
                display={{ xs: "none", sm: "flex" }}
                fontSize={".9rem"}
              >
                Sign up
              </Typography>
            </Button>

            <Button
              startIcon={<Login />}
              href="/login"
              variant={path === "/login" ? "contained" : "outlined"}
              sx={{ p: 2 }}
              title="Log In"
            >
              <Typography display={{ xs: "none", sm: "flex" }}>
                LogIn
              </Typography>
            </Button>
          </Stack>
        </Box>
      )}
      {error && (
        <Alert severity="error" variant="outlined">
          {error}
        </Alert>
      )}
    </>
  );
}
export default NavBar;
