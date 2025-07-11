import { Button, Stack, Typography } from "@mui/material";
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";

function RegisterNewAccountPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Get Started with BlogIt
      </Typography>
      <Stack
        component={"form"}
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
        <Stack direction={"row"} spacing={2}>
          <TextInput label="First name" placeholder="Enter you: First name" />
          <TextInput label="Last name" placeholder="Enter you: Last name" />
        </Stack>
        <TextInput label="Username" placeholder="Enter a Unique: Username" />
        <TextInput
          label="Email Address"
          placeholder="Enter a Valid: Email"
          type="email"
        />
        <PasswordInput label="Set a strong password" />
        <PasswordInput label="Confirm Password" />
        <Button
          type="submit"
          variant="contained"
          sx={{ background: "linear-gradient(to right, #4f46e5, #8B5CF6)" }}
        >
          Register
        </Button>
      </Stack>
    </>
  );
}

export default RegisterNewAccountPage;
