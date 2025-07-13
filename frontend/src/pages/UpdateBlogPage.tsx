import { Alert, Stack, Typography, Button, Paper } from "@mui/material";
import { EditNote } from "@mui/icons-material";
import BlogComponent from "../components/BlogContentInput";
import { useReducer, useState } from "react";
import { isAxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserSpecificBlog } from "../service/FetchAllBlogs";
import Markdown from "react-markdown";
import useUpdateBlog from "../service/UpdateBlog";

type BlogActionType = {
  type: string;
  payload: {
    value: string;
    inputField: string;
  };
};

type BlogStateType = {
  title: string;
  synopsis: string;
  content: string;
  featuredImageURL: string;
};

function createBlogReducer(prevState: BlogStateType, action: BlogActionType) {
  switch (action.type) {
    case "HANDLE_INPUT":
      const inputField = action.payload.inputField;
      return {
        ...prevState,
        [inputField]: action.payload.value,
      };

    default:
      return prevState;
  }
}


function UpdateBlogPage() {
    const {id} = useParams()
    console.log(id);
    const {data: currentBlog} = useGetUserSpecificBlog(id!)
    console.log(currentBlog);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const initialState = {
        title: currentBlog?.title,
        synopsis: currentBlog?.synopsis,
        content: currentBlog?.content,
        featuredImageURL: currentBlog?.featuredImageURL,
    };
    const [state, dispatch] = useReducer(createBlogReducer, initialState);
    const { mutateAsync: updateBlog } = useUpdateBlog(id!, state);
    

    function handleFeaturedImage(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
        type: "HANDLE_INPUT",
        payload: { inputField: "featuredImageURL", value: e.target.value },
        });
    }
    function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
        type: "HANDLE_INPUT",
        payload: { inputField: "title", value: e.target.value },
        });
    }
    function handleSynopsis(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
        type: "HANDLE_INPUT",
        payload: { inputField: "synopsis", value: e.target.value },
        });
    }
    function handleContent(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({
        type: "HANDLE_INPUT",
        payload: { inputField: "content", value: e.target.value },
        });
    }

    async function handleUpdateBlog() {
        try {
            const updatedBlog = await updateBlog();
            console.log(updatedBlog);
            if (updatedBlog) {
                navigate(-1);
            }
        } catch (err) {
            console.log(err);
            if (isAxiosError(err)) {
                setError(err.response?.data.message);
            }
        }
    }

    return (
        <Stack
        maxWidth={{ xs: "100%", md: "80%" }}
        p={2}
        mx={"auto"}
        my={2}
        bgcolor={"#f9f9f9"}
        >
        <Paper
            elevation={3}
            sx={{
            p: 4,
            borderRadius: 4,
            bgcolor: "#f9f9f9",
            width: { xs: "100%", sm: "80%" },
            margin: "0 auto",
            mt: 4,
            }}
        >
            <Stack spacing={3}>
            <Stack direction="row" alignItems="center" gap={1}>
                <EditNote fontSize="large" color="secondary" />
                <Typography variant="h4" fontWeight="bold" color="secondary">
                    Make your Blog More Interesting
                </Typography>
            </Stack>

            <Typography variant="body1" color="text.secondary">
               Perform Updates for this Blog 📝Blog Title: <Markdown>{currentBlog?.title}</Markdown>
            </Typography>
            </Stack>
        </Paper>
        <Stack
            component={"form"}
            onSubmit={handleUpdateBlog}
            width={{ xs: "100%", sm: "80%" }}
            my={2}
            mx={"auto"}
            p={2}
            bgcolor={"#fff"}
            boxShadow={"0 0 3px #5072fb"}
            borderRadius={2}
        >
            {error && <Alert severity="error">{error}</Alert>}
            <BlogComponent
            name="Featured Blog Image URL"
            value={state.featuredImageURL}
            onChange={handleFeaturedImage}
            />
            <BlogComponent
            name="Title"
            value={state.title}
            onChange={handleTitle}
            />
            <BlogComponent
            multiline={true}
            name="Synopsis"
            value={state.synopsis}
            onChange={handleSynopsis}
            />
            <BlogComponent
            minRows={8}
            multiline={true}
            name="Content"
            value={state.content}
            onChange={handleContent}
            />
            <Button
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
            >
            Update Blog
            </Button>
        </Stack>
        </Stack>

    )
}

export default UpdateBlogPage