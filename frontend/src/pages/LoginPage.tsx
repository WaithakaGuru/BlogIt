import {Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
    <Typography variant="h3" align="center" gutterBottom> Login to your account</Typography>
     <Stack component={"form"} spacing={2} padding={2} width={{xs: "95%", sm:"70%", md: "40%"}}
      border={"2px solid"} borderRadius={2} sx={{placeSelf: "center"}}>
       <TextField type="text" label="Enter your Username or Email" required  variant="outlined"/>
       <TextField type="password" label="Enter your password" required />
       <Button type="submit" variant="contained"
        sx={{background: "linear-gradient(45deg, #3b82f6 40%, #8B5CF6 -10% )"}}
       >Login</Button>
       <Typography variant="body1" >Don't have an account? <Link to={"/signup"} title="create new account">Register Now</Link>  </Typography>
     </Stack>
    </>
)}
export default LoginPage;
