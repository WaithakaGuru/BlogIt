import { Alert, Button, Stack, Typography } from "@mui/material";
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";
import { useEffect, useReducer, useState } from "react";
import checkPasswordStrength from "../utils/checkPasswordStrength";
import { useRegisterNewUser } from "../service/PostRequests";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

type ActionType = {
  type: string;
  payload: { element: string; value: string };
};

type RegisterFormType = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function reducerFunc(prevState: RegisterFormType, action: ActionType) {
  switch (action.type) {
    case "HANDLE_INPUT":
      const updateField = action.payload.element;
      return {
        ...prevState,
        [updateField]: action.payload.value,
      };

    default:
      return prevState;
  }
}

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function RegisterNewAccountPage() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const [error, setError] = useState("");
  const [isRegisterNewUserBtnLoading, setIsRegisterNewUserBtnLoading] = useState(false);
  const { mutateAsync: reigsterUser, isPending } = useRegisterNewUser();

  function handleFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HANDLE_INPUT",
      payload: { element: "firstName", value: e.target.value },
    });
  }
  function handleLastName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HANDLE_INPUT",
      payload: { element: "lastName", value: e.target.value },
    });
  }
  function handleUserName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HANDLE_INPUT",
      payload: { element: "userName", value: e.target.value },
    });
  }
  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HANDLE_INPUT",
      payload: { element: "email", value: e.target.value },
    });
  }
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HANDLE_INPUT",
      payload: { element: "password", value: e.target.value },
    });
  }
  function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HANDLE_INPUT",
      payload: { element: "confirmPassword", value: e.target.value },
    });
  }

  useEffect(()=>{
    isPending ? setIsRegisterNewUserBtnLoading(true) :  setIsRegisterNewUserBtnLoading(false);
  }, [isPending])

  async function handleRegisterNewUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!checkPasswordStrength(state.password)) {
        setError("Please Choose a Stronger Password");
        return;
      }
      if (!(state.password === state.confirmPassword)) {
        setError("Password and confirm password must be the same");
      }
      const { confirmPassword, ...newUserInfo } = state;
      const newUser = await reigsterUser(newUserInfo);
      if (newUser) {
        navigate("/login", { replace: true });
      }
    } catch (err) {
      console.log(err);
      if (isAxiosError(err)) {
        setError(err.response?.data.message);
      }
    }
  }

  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Get Started with BlogIt
      </Typography>
      <Stack
        component={"form"}
        onSubmit={handleRegisterNewUser}
        p={2}
        spacing={2}
        border={"2px solid"}
        borderRadius={3}
        width={{ xs: "95%", sm: "70%", md: "50%" }}
        sx={{ placeSelf: "center" }}
      >
        <Typography variant="h6" align="center" color="secondary">
          Set your free BlogIt account in a few quick steps
        </Typography>

        {error && (
          <Alert
            severity="error"
            variant="outlined"
            sx={{ color: "red", fontWeight: 600, fontSize: "1rem" }}
          >
            {error}
          </Alert>
        )}

        <Stack direction={"row"} spacing={2}>
          <TextInput
            label="First name"
            placeholder="Enter you: First name"
            value={state.firstName}
            onChange={handleFirstName}
            required
          />
          <TextInput
            label="Last name"
            placeholder="Enter you: Last name"
            value={state.lastName}
            onChange={handleLastName}
            required
          />
        </Stack>
        <TextInput
          label="Username"
          placeholder="Enter a Unique: Username"
          value={state.userName}
          onChange={handleUserName}
          required
        />
        <TextInput
          label="Email Address"
          placeholder="Enter a Valid: Email"
          type="email"
          required
          onChange={handleEmail}
          value={state.email}
        />
        <PasswordInput
          label="Set a strong password"
          required
          value={state.password}
          onChange={handlePassword}
        />
        <PasswordInput
          label="Confirm Password"
          required
          value={state.confirmPassword}
          onChange={handleConfirmPassword}
        />
        <Button
          type="submit"
          variant="contained"
          loading={isRegisterNewUserBtnLoading}
          sx={{ background: "linear-gradient(to right, #4f46e5, #8B5CF6)" }}
        >
          Register
        </Button>
        <Typography variant="subtitle1">
          Already have an account?{" "}
          <Link to={"/login"} title="create new account">
            Log in 
          </Link>{" "}
        </Typography>
      </Stack>
    </>
  );
}

export default RegisterNewAccountPage;
