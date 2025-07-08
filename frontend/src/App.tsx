import { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

function App() { 
  const [markdown, setMarkdown] = useState("");

  return (
    <>
      <h1>this <img src="Blogit Logo1.png" alt="" width={200} /></h1>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          Markdown Input
        </Typography>

        <TextField
          label="Write in Markdown"
          multiline
          minRows={6}
          fullWidth
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />

        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Preview
          </Typography>

          <Box p={2} border={1} borderColor="grey.300" borderRadius={2}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
