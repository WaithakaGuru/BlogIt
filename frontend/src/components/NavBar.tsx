import { AppRegistration, Dashboard, Home, Login, Logout, Notes, Person} from "@mui/icons-material";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import useBlog from "../store/Blog.store";
import {useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const {isLoggedIn, setIsLoggedIn} = useBlog();
  const path  = useLocation().pathname
  const navigate = useNavigate()

  function handleLogOut () {
    setIsLoggedIn(0);
    navigate("/", {replace: true})
  }

  return <>
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
        <Button startIcon={<Dashboard/>} title="BlogIt User DashBoard" 
        href="/dashboard" variant={path === "/dashboard"? "contained": "outlined"}  
         sx={{maxHeight: "fit-content", px:2, mx:1, py: ".85rem", placeSelf: "center"}}> 
          <Typography display={{xs: "none", sm:"flex"}}>
            BlogIT
          </Typography>
        </Button>

        <Typography variant="subtitle1" fontWeight={500} color="secondary" px={2} my={"auto"} align="center">
          Hello Johnson
        </Typography>

        <Stack direction={"row"} gap={2} p={2}>
           <Button
            href="/"
            variant={path === "/"? "contained"  : "outlined"}
            title="Go to home page"
            sx={{m:0, p:0}}
          >
            <Home /> 
          </Button>
          <Button startIcon={<Notes/>} variant={path === "/dashboard/blogs"? "contained": "outlined"} title="My Blogs"
            href="/dashboard/blogs"
          >
            <Typography display={{xs: "none", sm:"flex"}}>
              My Blogs
            </Typography>
          </Button>

          <Button startIcon={<Person/>} variant={path === "/dashboard/profile"? "contained": "outlined"} href="/dashboard/profile"
          title="My profile" sx={{px:1}}>
            <Typography display={{xs: "none", sm:"flex"}}>
             My Profile
            </Typography>
          </Button> 

          <Button endIcon={<Logout/>} variant="contained" 
            color="error" 
            title="Log Out"
            onClick={handleLogOut}
            sx={{ px: 1, maxWidth: "fit-content" }}
          >
            <Typography display={{xs: "none", sm:"flex"}}>
              LogOut
            </Typography>
          </Button>

        </Stack>
      </Box>
    )

    :(
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
          image= "BlogLogo.png"
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
            <Typography display={{xs: "none", sm: "flex"}}>
              Home
            </Typography>
          </Button>

          <Button
            href="/register"
            title="Register New Account"
            sx={{background: path === "/register" ? "linear-gradient(to right, #3B82F6, #8B5CF6)" : ""}}
            variant={path === "/register" ? "contained" : "outlined"}
          >
            <AppRegistration />
           <Typography display={{xs: "none", sm: "flex"}} fontSize={".9rem"}> 
              Sign up
            </Typography>
          </Button>

          <Button startIcon={<Login/>} href="/login" 
            variant={path === "/login" ? "contained" : "outlined"}
            sx={{ p: 2 }} title="Log In"
          >
            <Typography display={{xs: "none", sm: "flex"}}>
              LogIn
            </Typography>
          </Button>

        </Stack>
      </Box>
     ) 
    }
  </>
}
export default NavBar;
