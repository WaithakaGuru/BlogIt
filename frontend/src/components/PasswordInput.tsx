import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";


function PasswordInput ({labelInfo}: {labelInfo: string}) {
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = ()=>{ setShowPassword(prev => !prev)};
    return (
        <TextField
            type={showPassword?"text": "password"}
            label={labelInfo}
            variant="outlined"
           InputProps={
            {
                endAdornment:(
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} color="primary">
                            {showPassword?<VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                )}
            }            
        />
    )
}

export default PasswordInput;