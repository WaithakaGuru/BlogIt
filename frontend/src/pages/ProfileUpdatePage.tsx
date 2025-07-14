import { useState } from "react";
import { Stack, Typography, Paper, Button, Alert, IconButton, Avatar, Box } from "@mui/material";
import { Edit } from "@mui/icons-material";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { useGetCurrentUserInfo, useGetUserInfo } from "../service/FetchAllBlogs";
import { useUpdateUserInfo, useUpdatePassword} from "../service/PatchRequests";
import checkPasswordStrength from "../utils/checkPasswordStrength";

type initialState = string | null;

function ProfileUpdatePage() {
  const {data: currentUser} = useGetCurrentUserInfo();
  const {data: user} = useGetUserInfo(currentUser?.data.id);
  const userInfo = user?.data;   

  const [formState, setFormState] = useState({
    firstName: userInfo?.firstName ||  "",
    lastName: userInfo?.lastName || "",
    userName: userInfo?.userName || "",
    email: userInfo?.email || "",}
  );

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
      if(checkPasswordStrength(passwordState.newPassword)){
        await updatePassword(passwordState);
        setSuccess("Password updated successfully.");
        setError(errorSuccessFirstState);
        setPasswordState({ currentPassword: "", newPassword: "" });
      }
      else{
        setError("Choose a stronger password!!")
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to update password.");
      setSuccess(errorSuccessFirstState);
    }
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        my={4}
        bgcolor="#8653fcff"
        p={4}
        justifyContent="space-between"
        alignItems="center"
        mx={"auto"}
        gap={4}
        width={{xs: "100%", sm: "90%", md: "80%"}}
        borderRadius={2}
        boxShadow={2}
      >
        <Typography
          variant="h4"
          gutterBottom
          maxWidth={{ xs: "100%", md: "50%" }}
          fontWeight={600}
          lineHeight={1.4}
          color="#fff"
        >
          BlogIt User Profile: Your Interface to update your profile details
          <Typography variant="h6" color="textSecondary" >
            Design how you want to be addressed
          </Typography>
        </Typography>

        <Stack
          direction="column"
          spacing={2}
          sx={{
            borderLeft: { xs: "none", md: "2px solid #ccc" },
            pl: { xs: 0, md: 3 },
            width: { xs: "100%", md: "50%" },
          }}
          color="#fff"
        >
          <Box
            component="section"
            display="flex"
            alignItems="center"
            gap={2}
            mb={2}
          >
            <Avatar
              sx={{
                bgcolor: "darkslateblue",
                width: 80,
                height: 80,
                fontSize: "2rem",
                fontFamily: "cursive",
                fontWeight: 600,
              }}
            >
              {userInfo?.firstName[0]}
              {userInfo?.lastName[0]}
            </Avatar>

            <Typography
              variant="h4"
              sx={{ textDecoration: "underline", fontWeight: 500 }}
            >
              Profile Info
            </Typography>
            <IconButton title="Edit Profile" href="/dashboard/profile">
              <Edit
                sx={{
                  position: "relative",
                  right: 0,
                  cursor: "pointer",
                  color: " #fff",
                  bgcolor: "darkslateblue",
                  borderRadius: "50%",
                  height: "3rem",
                  width: "3rem",
                }}
              />
            </IconButton>
          </Box>

          <Typography variant="body1">
            <strong>Username:</strong> {userInfo?.userName}
          </Typography>
          <Typography variant="body1">
            <strong>First Name:</strong> {userInfo?.firstName}
          </Typography>
          <Typography variant="body1">
            <strong>Last Name:</strong> {userInfo?.lastName}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="h4" fontWeight="bold" color="secondary" align="center">
        Profile Settings
      </Typography>
    <Stack spacing={4} maxWidth={{xs: "100%", sm: "95%", md:"75%"}} mx="auto" p={3} direction={{xs: "column", md: "row"}}>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 2, borderRight:"1px solid", width: {xs: "95%", md: "50%"}}}>
        <Typography variant="h6" mb={2}>
          Update Personal Information
        </Typography>
        <form  onSubmit={handleProfileSubmit}>
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
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2, width: {xs: "95%", md: "48%"}, borderLeft: 1, ml: 2}}>
        <Typography variant="h6" mb={2}>
          Change Password
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <form onSubmit={handlePasswordSubmit}>
          <Stack spacing={2}>
            <PasswordInput
             required
              label="Current Password"
              value={passwordState.currentPassword}
              onChange={(e) => handlePasswordChange("currentPassword", e.target.value)}
            />
            <PasswordInput
             required
              label="New Password"
              value={passwordState.newPassword}
              onChange={(e) => handlePasswordChange("newPassword", e.target.value)}
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
