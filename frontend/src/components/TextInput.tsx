import { TextField, type TextFieldProps } from "@mui/material";

function TextInput({
  variant,
  onChange,
  placeholder,
  label,
  value,
  type,
  required = true,
}: TextFieldProps) {
  return (
    <TextField
      color="secondary"
      value={value}
      label={label}
      placeholder={placeholder}
      type={type}
      required={required}
      variant={variant}
      onChange={onChange}
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
