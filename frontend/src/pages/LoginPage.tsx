import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import LogUserIn from "../service/UserLogin";
import { useState } from "react";
import useBlog from "../store/Blog.store";
import { isAxiosError } from "axios";

function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [enteredPassword, setPass] = useState("");
  const [error, setError] = useState(null);

  const handleIdentifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifier(e.target.value);
  };

  function handleSetPass(e: React.ChangeEvent<HTMLInputElement>) {
    setPass(e.target.value);
  }

  async function handleLogIn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setError(null);
    try {
      const loggedIn = await LogUserIn({ identifier, enteredPassword });
      // if(loggedIn.isSuccess){
      const userJWToken = loggedIn.data.userToken;
      const { addToken } = useBlog();
      addToken(userJWToken);
      console.log(userJWToken);
      <Navigate to={"/dashboard"} />;
      // }
    } catch (err) {
      if (isAxiosError(err)) {
        setError(err.response?.data.message);
      }
    }
  }

  return (
    <>
      <Typography variant="h3" align="center" my={4} gutterBottom>
        Login to your account
      </Typography>
      <Stack
        component={"form"}
        spacing={2}
        padding={2}
        width={{ xs: "95%", sm: "70%", md: "40%" }}
        border={"2px solid"}
        borderRadius={2}
        sx={{ placeSelf: "center" }}
      >
        {error && (
          <Alert
            variant="outlined"
            severity="error"
            sx={{ mx: "auto", mb: 2, minWidth: "max-content" }}
          >
            {error}
          </Alert>
        )}
        <TextField
          type="text"
          label="Enter your Username or Email"
          value={identifier}
          onChange={handleIdentifier}
          required
          variant="outlined"
        />
        <PasswordInput
          label="Enter your password"
          value={enteredPassword}
          onChange={handleSetPass}
        />
        <Button
          type="submit"
          variant="contained"
          onClick={handleLogIn}
          sx={{
            background: "linear-gradient(45deg, #3b82f6 10%, #8B5CF6 80% )",
          }}
        >
          Login
        </Button>
        <Typography variant="body1">
          Don't have an account?{" "}
          <Link to={"/register"} title="create new account">
            Register Now
          </Link>{" "}
        </Typography>
      </Stack>
    </>
  );
}
export default LoginPage;
