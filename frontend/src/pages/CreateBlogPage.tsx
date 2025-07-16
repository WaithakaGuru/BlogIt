import { Alert, Stack, Typography, Button, Paper} from "@mui/material";
import { EditNote } from "@mui/icons-material";
import BlogComponent from "../components/BlogContentInput";
import { useEffect, useReducer, useState } from "react";
import useCreateBlog from "../service/CreateBlog";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUserInfo } from "../service/FetchAllBlogs";
import BlogImageInput from "../components/BlogImageInput";

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

const initialState = {
  title: "",
  synopsis: "",
  content: "",
  featuredImageURL: "",
};

function CreateBlogPage() {
  const [state, dispatch] = useReducer(createBlogReducer, initialState);
  const { mutateAsync: createBlog, isPending } = useCreateBlog();
  const [error, setError] = useState();
  const [isPublishBlogBtnLoading, setIsPublishBlogBtnLoading] = useState(false);
  const navigate = useNavigate();
  const { data: userInfo } = useGetCurrentUserInfo();

  const url = localStorage.getItem("uploadedImageUrl");

  useEffect(()=>{
    dispatch({type: "HANDLE_INPUT", payload:{inputField: "featuredImageURL", value: url!}})
  }, ["url"])
  
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

  async function handleCreateNewBlog() {
    const userId = userInfo?.data.userInfo.id;
    try {
      isPending && setIsPublishBlogBtnLoading(true);
     const newBlog = await createBlog({ ...state, userId });
      if (newBlog) {
        navigate("/");
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
              Write a New Blog
            </Typography>
          </Stack>

          <Typography variant="body1" color="text.secondary">
            Share your thoughts with the world — start by giving your blog a
            title and then dive into your content.
          </Typography>
        </Stack>
      </Paper>
      <Stack
        component={"form"}
        onSubmit={handleCreateNewBlog}
        width={{ xs: "100%", sm: "80%" }}
        my={2}
        mx={"auto"}
        p={2}
        bgcolor={"#fff"}
        boxShadow={"0 0 3px #5072fb"}
        borderRadius={2}
      >
        {error && <Alert severity="error">{error}</Alert>}
       <BlogImageInput/>
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
          loading={isPublishBlogBtnLoading}
        >
          Publish Blog
        </Button>
      </Stack>
    </Stack>
  );
}

export default CreateBlogPage;
