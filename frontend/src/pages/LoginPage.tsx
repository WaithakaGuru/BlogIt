import {Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

function LoginPage() {
  return (
    <>
    <Typography variant="h3" align="center" gutterBottom> Login to your account</Typography>
     <Stack component={"form"} spacing={2} padding={2} width={{xs: "95%", sm:"70%", md: "40%"}}
      border={"2px solid"} borderRadius={2} sx={{placeSelf: "center"}}>
       <TextField type="text" label="Enter your Username or Email" required  variant="outlined"/>
       <PasswordInput labelInfo="Enter your password"/>
       <Button type="submit" variant="contained"
        sx={{background: "linear-gradient(45deg, #3b82f6 10%, #8B5CF6 80% )"}}
       >Login</Button>
       <Typography variant="body1" >Don't have an account? <Link to={"/signup"} title="create new account">Register Now</Link>  </Typography>
     </Stack>
    </>
)}
export default LoginPage;
