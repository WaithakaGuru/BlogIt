import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import useLogUserIn from "../service/UserLogin";
import { useState } from "react";
import useBlog from "../store/Blog.store";
import { isAxiosError } from "axios";

function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [enteredPassword, setPass] = useState("");
  const [error, setError] = useState("");
  const [isLoginBtnLoading, setIsLoginBtnLoading] = useState(false);
  const { addToken, setIsLoggedIn } = useBlog();
  const nav = useNavigate();
  const { mutateAsync: login, isPending } = useLogUserIn();

  const handleIdentifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifier(e.target.value);
  };

  function handleSetPass(e: React.ChangeEvent<HTMLInputElement>) {
    setPass(e.target.value);
  }

  async function handleLogIn(e: React.FormEvent<HTMLFormElement>) {
    setError("");
    e.preventDefault();
    try {
      isPending && setIsLoginBtnLoading(true);
      const loggedIn = await login({ identifier, enteredPassword });
      if (loggedIn) {
        const userJWToken = loggedIn.token;
        addToken(userJWToken);
        setIsLoggedIn(1);
        nav("/dashboard", { replace: true });
      }
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
      <Typography variant="h3" align="center" my={4} gutterBottom>
        Login to your account
      </Typography>
      <Stack
        component={"form"}
        onSubmit={handleLogIn}
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
          required={true}
          label="Enter your password"
          value={enteredPassword}
          onChange={handleSetPass}
        />
        <Button
          type="submit"
          variant="contained"
          loading={isLoginBtnLoading}
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
