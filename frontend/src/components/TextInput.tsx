import { TextField } from "@mui/material"

function TextInput({labelInfo, placeholderInfo, t="text", must=true}: {labelInfo: string, placeholderInfo: string, t?:string, must?: boolean}){

    return(
        <TextField color="secondary" label={labelInfo} placeholder={placeholderInfo}  type={t} required={must}
            variant="outlined"fullWidth sx={{ input:{'&::placeholder': {color:"darkslateblue", opacity: .9 }, 
            color: "darkslategrey"}}}
         />
    )
}

export default TextInput