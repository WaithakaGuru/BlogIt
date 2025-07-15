import { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  Paper,
  Button,
  Alert,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import {
  useGetCurrentUserInfo,
} from "../service/FetchAllBlogs";
import { useUpdateUserInfo, useUpdatePassword } from "../service/PatchRequests";
import checkPasswordStrength from "../utils/checkPasswordStrength";

type initialState = string | null;

function ProfileUpdatePage() {
  const { data: user } = useGetCurrentUserInfo();
  const [formState, setFormState] = useState({
    firstName: user?.data.firstName,
    lastName: user?.data.lastName,
    userName: user?.data.userName,
    email: user?.data.email,
  });
   console.log(user?.data);
  useEffect(() => {
    setFormState({
      firstName: user?.data.firstName,
      lastName: user?.data.lastName,
      userName: user?.data.userName,
      email: user?.data.email,
    });
  }, [user]);

  const [passwordState, setPasswordState] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const errorSuccessFirstState: initialState = "";
  const [error, setError] = useState(errorSuccessFirstState);
  const [success, setSuccess] = useState(errorSuccessFirstState);

  const { mutateAsync: updateProfile } = useUpdateUserInfo();
  const { mutateAsync: updatePassword } = useUpdatePassword();

  const handleInputChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordState((prev) => ({ ...prev, [field]: value }));
  };

  const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = updateProfile(formState!);
      console.log(data);
      setSuccess("Profile updated successfully.");
      setError(errorSuccessFirstState);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Something went wrong.");
      setSuccess(errorSuccessFirstState);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!passwordState.currentPassword || !passwordState.newPassword) {
        setError("Both current and new password are required.");
        return;
      }
      if (checkPasswordStrength(passwordState.newPassword)) {
        await updatePassword(passwordState);
        setSuccess("Password updated successfully.");
        setError(errorSuccessFirstState);
        setPasswordState({ currentPassword: "", newPassword: "" });
      } else {
        setError("Choose a stronger password!!");
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to update password.");
      setSuccess(errorSuccessFirstState);
    }
  };

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          p: 5,
          borderRadius: 4,
          background: "linear-gradient(135deg, #e7edf6ff, #c3cfe2)",
          width: { xs: "100%", sm: "90%" },
          minHeight: "24rem",
          margin: "0 auto",
          mt: 6,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          flexWrap="wrap"
        >
          <Stack maxWidth={{ xs: "100%", md: "50%" }}>
            <Typography
              variant="h4"
              gutterBottom
              fontWeight={700}
              color="secondary"
              sx={{ textShadow: "0 1px 1px rgba(0,0,0,0.1)" }}
            >
              BlogIt User Profile
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Your interface to update your profile details.
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Design how you want to be addressed.
            </Typography>
          </Stack>

          <Stack
            direction="column"
            spacing={2}
            sx={{
              borderLeft: { xs: "none", md: "2px dashed #bbb" },
              pl: { xs: 0, md: 3 },
              width: { xs: "100%", md: "50%" },
              bgcolor: "rgba(255,255,255,0.5)",
              p: 3,
              borderRadius: 3,
            }}
          >
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <Avatar
                sx={{
                  bgcolor: "darkslateblue",
                  width: 80,
                  height: 80,
                  fontSize: "2rem",
                  fontFamily: "cursive",
                  fontWeight: 600,
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                {user?.data.firstName[0]}
                {user?.data.lastName[0]}
              </Avatar>

              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary"
                sx={{ textDecoration: "underline wavy" }}
              >
                Profile Info
              </Typography>

              <IconButton title="Edit Profile" href="/dashboard/profile">
                <Edit
                  sx={{
                    color: "#fff",
                    backgroundColor: "#8B5CF6",
                    borderRadius: "50%",
                    width: "2.5rem",
                    height: "2.5rem",
                    p: 1,
                    boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </IconButton>
            </Box>

            <Typography variant="body1">
              <strong>Username:</strong> {user?.data.userName}
            </Typography>
            <Typography variant="body1">
              <strong>First Name:</strong> {user?.data.firstName}
            </Typography>
            <Typography variant="body1">
              <strong>Last Name:</strong> {user?.data.lastName}
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <Typography
        variant="h4"
        fontWeight="bold"
        color="secondary"
        align="center"
      >
        Profile Settings
      </Typography>
      <Stack
        spacing={4}
        maxWidth={{ xs: "100%", sm: "95%", md: "75%" }}
        mx="auto"
        minHeight={"28rem"}
        p={3}
        direction={{ xs: "column", md: "row" }}
      >
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            borderRight: "1px solid",
            width: { xs: "95%", md: "50%" },
          }}
        >
          <Typography variant="h6" mb={2}>
            Update Personal Information
          </Typography>
          <form onSubmit={handleProfileSubmit}>
            <Stack spacing={2}>
              <TextInput
                label="First Name"
                value={formState.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <TextInput
                label="Last Name"
                value={formState.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              <TextInput
                label="Username"
                value={formState.userName}
                onChange={(e) => handleInputChange("userName", e.target.value)}
              />
              <TextInput
                label="Email"
                value={formState.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                type="email"
              />
              <Button variant="contained" color="secondary" type="submit">
                Update Profile
              </Button>
            </Stack>
          </form>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            width: { xs: "95%", md: "48%" },
            borderLeft: 1,
            ml: 2,
          }}
        >
          <Typography variant="h6" mb={2}>
            Change Password
          </Typography>
          <form onSubmit={handlePasswordSubmit}>
            <Stack spacing={2}>
              <PasswordInput
                required
                label="Current Password"
                value={passwordState.currentPassword}
                onChange={(e) =>
                  handlePasswordChange("currentPassword", e.target.value)
                }
              />
              <PasswordInput
                required
                label="New Password"
                value={passwordState.newPassword}
                onChange={(e) =>
                  handlePasswordChange("newPassword", e.target.value)
                }
              />
              <Button variant="contained" color="secondary" type="submit">
                Update Password
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </>
  );
}

export default ProfileUpdatePage;
