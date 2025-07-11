import { TextField, type TextFieldProps } from "@mui/material";

function TextInput({
  variant,
  onChange,
  name,
  placeholder,
  label,
  value,
  type,
  ...rest
}: TextFieldProps) {
  return (
    <TextField
      color="secondary"
      value={value}
      label={label}
      placeholder={placeholder}
      type={type}
      required={rest.required}
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
