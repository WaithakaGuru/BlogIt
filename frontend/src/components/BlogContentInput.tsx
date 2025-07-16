import { Box, TextField, Typography, type TextFieldProps, Button} from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import Markdown from "react-markdown";

type BlogComponentPropsType = TextFieldProps & { name: string; value?: string, markDownValue?: string, handleImageUpload?: ()=>void };

function BlogComponent({
  multiline = false,
  minRows = 2,
  value,
  required = true,
  onChange,
  name,
  type = "text",
  handleImageUpload,
  markDownValue,
  label=""
}: BlogComponentPropsType) {
  return (
    <Box p={2} position={"relative"}>
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
        {handleImageUpload && (
          <Button variant="contained" color="secondary" sx={{position: "absolute", zIndex: 0, right:"2rem", top:"4rem"}}
              endIcon={<UploadFile/>} onClick={handleImageUpload}>Upload
          </Button>
        )}
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
