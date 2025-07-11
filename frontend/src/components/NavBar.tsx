import { Home } from "@mui/icons-material";
import { Box, Button, CardMedia, IconButton, Stack } from "@mui/material";

function NavBar() {
  return (
    <>
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
          <IconButton
            href="/"
            color="secondary"
            title="Go to home page"
            sx={{
              display: "flex",
              border: "1px solid",
              borderRadius: "50%",
              flexDirection: "column",
              fontSize: "1rem",
              p: ".6rem",
            }}
          >
            <Home />
          </IconButton>
          <Button href="/login" variant="outlined" sx={{ p: 2 }}>
            LogIn
          </Button>
          <Button
            href="/register"
            variant="contained"
            sx={{ background: "linear-gradient(to right, #3B82F6, #8B5CF6)" }}
          >
            Register Now
          </Button>
        </Stack>
      </Box>
    </>
  );
}
export default NavBar;
