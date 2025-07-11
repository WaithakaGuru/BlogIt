import { Button, Stack, Typography } from "@mui/material";
import PasswordInput from "../components/PasswordInput";
import TextInput from "../components/TextInput";

function RegisterNewAccountPage () {

    return (
        <>
            <Typography variant="h4" gutterBottom align="center">Get Started with BlogIt</Typography>            
            <Stack component={"form"} p={2} spacing={2} border={"2px solid"} 
                borderRadius={3}  width={{xs: "95%", sm:"70%", md:"50%" }} sx={{placeSelf:"center"}}
            > 
                <Typography variant="h6" align="center" color="secondary">Set your free BlogIt account in a few quick steps</Typography>
                <Stack direction={"row"} spacing={2} >
                  <TextInput labelInfo ="First name" placeholderInfo="Enter you: First name"/>
                  <TextInput labelInfo ="Last name" placeholderInfo="Enter you: Last name"/>
                </Stack>
                    <TextInput labelInfo ="Username" placeholderInfo="Enter a Unique: Username"/>
                    <TextInput labelInfo ="Email Address" placeholderInfo="Enter a Valid: Email" t="email"/>
                    <PasswordInput labelInfo="Set a strong password"/>
                    <PasswordInput labelInfo="Confirm Password"/>
                    <Button type="submit" variant="contained"
                        sx={{background: "linear-gradient(to right, #4f46e5, #8B5CF6)"}}
                    >
                        Register
                    </Button>
            </Stack>
        </>
    )
}

export default RegisterNewAccountPage;