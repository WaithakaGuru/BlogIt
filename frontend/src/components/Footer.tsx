import { Email, Facebook, Phone, WhatsApp, X } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      component={"footer"}
      width={"100%"}
      minHeight={"10rem"}
      mt={8}
      sx={{
        background: `linear-gradient(rgb(108, 60, 220) 30%,rgb(3, 75, 189) )`,
      }}
    >
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        p={2}
        gap={4}
        justifyContent={"center"}
      >
        <Stack maxWidth={{ md: "35%", xs: "70%" }}>
          <Typography
            variant="h5"
            fontWeight={600}
            fontFamily={"Montserrat"}
            gutterBottom
            color="#f9f9f9"
            sx={{ textDecoration: "underline" }}
          >
            BlogIt
          </Typography>
          <Typography
            variant="subtitle1"
            fontFamily={"Montserrat"}
            color="textDisabled"
          >
            An open platform to learn and create your own Blogs to express ideas
            in the simples manner possible
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="h5"
            color="#f9f9f9"
            fontFamily={"Montserrat"}
            fontWeight={"600"}
            gutterBottom
            sx={{ textDecoration: "underline" }}
          >
            Quick Links
          </Typography>
          <Link to={"/register"} title="Create account">
            <Typography variant="body1" color="textDisabled">
              Create a Free account
            </Typography>
          </Link>
          <Link to={"/login"} title="Login to your BlogIt account">
            <Typography variant="body1" color="textDisabled">
              Login to your account
            </Typography>
          </Link>
          <Link to={"/dashboard"} title="Popular Blogs">
            <Typography variant="body1" color="textDisabled">
              Blogs{" "}
            </Typography>
          </Link>
          <Link to={"/"} title="About BlogIt">
            <Typography variant="body1" color="textDisabled">
              About BlogIt{" "}
            </Typography>
          </Link>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography
            variant="h5"
            color="#f9f9f9"
            fontFamily={"Montserrat"}
            fontWeight={"600"}
            gutterBottom
            sx={{ textDecoration: "underline" }}
          >
            Connect with us
          </Typography>
          <AvatarGroup spacing={5}>
            <Avatar>
              <IconButton href="https://whatsapp.com" sx={{bgcolor: "#000"}}>
                {" "}
                <WhatsApp color="success" />
              </IconButton>
            </Avatar>
            <Avatar>
              <IconButton href="https://facebook.com" sx={{bgcolor: "#333"}}>
                {" "}
                <Facebook color="info" />
              </IconButton>
            </Avatar>
            <Avatar>
              <IconButton href="https://x.com" sx={{bgcolor: "#eee"}}>
                {" "}
                <X color="action" sx={{color: "#000"}} />
              </IconButton>
            </Avatar>
          </AvatarGroup>
          <Button
            variant="outlined"
            href={"tel:+254798685668"}
            color="info"
            sx={{ color: "#ccc" }}
          >
            {" "}
            <Phone color="action" /> Call us on: 0798685868
          </Button>
          <Button
            variant="outlined"
            href={"mailto:info@blogit.com"}
            color="info"
            size="large"
            sx={{ color: "#ccc" }}
          >
            {" "}
            <Email color="action" /> info@blogit.com
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;
