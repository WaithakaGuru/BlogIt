import { Box, TextField, Typography, type TextFieldProps } from "@mui/material";
import Markdown from "react-markdown";

type BlogComponentPropsType = TextFieldProps & { name: string; value: string, markDownValue?: string };

function BlogComponent({
  multiline = false,
  minRows = 2,
  value,
  required = true,
  onChange,
  name,
  type = "text",
  markDownValue,
  label=""
}: BlogComponentPropsType) {
  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom color="secondary">
        {name} Input
      </Typography>

      <TextField
        label={label || `Write your BLog ${name} here in Markdown`}
        multiline={multiline}
        minRows={minRows}
        fullWidth
        type={type}
        value={value}
        required={required}
        onChange={onChange}
      />

      <Box mt={2}>
        <Typography variant="h6" gutterBottom color="secondary">
          Blog {name} Preview
        </Typography>

        <Box
          component={"div"}
          p={2}
          border={1}
          borderColor="grey.300"
          borderRadius={2}
        >
          <Markdown>{markDownValue}</Markdown>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogComponent;
