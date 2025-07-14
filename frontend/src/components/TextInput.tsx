import { TextField, type TextFieldProps } from "@mui/material";

function TextInput({
  variant,
  onChange,
  placeholder,
  label,
  type,
  required = true,
  value = "",
}: TextFieldProps) {
  return (
    <TextField
      color="secondary"
      label={label}
      placeholder={placeholder}
      type={type}
      required={required}
      variant={variant}
      onChange={onChange}
      value={value}
      fullWidth
      sx={{
        input: {
          "&::placeholder": { color: "darkslateblue", opacity: 0.9 },
          color: "darkslategrey",
        },
      }}
    />
  );
}

export default TextInput;
