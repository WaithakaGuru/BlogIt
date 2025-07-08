import {Box, TextField, Typography} from '@mui/material'
import { useState } from 'react';
import Markdown from 'react-markdown'

import useBlog from '../store/Blog.store';

function BlogComponent () {
    const [markdown, setMarkdown] = useState("");
    return (
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
            <Markdown>{markdown}</Markdown>
            </Box>
        </Box>
        </Box>
    )

}

export default BlogComponent;