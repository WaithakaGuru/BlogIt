import { Box, TextField, Typography, type TextFieldProps } from "@mui/material";
import Markdown from "react-markdown";

type BlogComponentPropsType = TextFieldProps & { name: string; value: string };

function BlogComponent({
  multiline = false,
  minRows = 2,
  value,
  required = true,
  onChange,
  name,
}: BlogComponentPropsType) {
  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom color="secondary">
        {name} Input
      </Typography>

      <TextField
        label={`Write your BLog ${name} here in Markdown`}
        multiline={multiline}
        minRows={minRows}
        fullWidth
        value={value}
        required={required}
        onChange={onChange}
      />

      <Box mt={2}>
        <Typography variant="h6" gutterBottom color="secondary">
          Blog {name} Preview
        </Typography>

        <Box p={2} border={1} borderColor="grey.300" borderRadius={2}>
          <Markdown>{value}</Markdown>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogComponent;
