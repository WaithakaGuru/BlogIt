import { Box, Button, CardMedia, Stack } from "@mui/material";

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
          sx={{
            maxWidth: "12rem",
            height: "4rem",
            my: "auto",
          }}
        />
        <Stack direction={"row"} gap={2} p={2}>
          <Button href="/login" variant="outlined" sx={{ p: 2 }}>
            LogIn
          </Button>
          <Button
            href="/login"
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
