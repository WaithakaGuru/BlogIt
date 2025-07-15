import {
  Stack,
  Paper,
  Typography,
  Button,
  Chip,
  Box,
  Alert,
} from "@mui/material";
import { Notes, Edit, Delete, Email, Person } from "@mui/icons-material";
import SingleBlog from "../components/SingleBlog";
import { useGetUserSpecificBlog } from "../service/FetchAllBlogs";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useDeleteBlog from "../service/DeleteBlog";
import { isAxiosError } from "axios";

function SingleUserBlogPage() {
  const { id } = useParams();
  const { mutateAsync: deleteBlog, isPending } = useDeleteBlog(id!);
  const { data: blog } = useGetUserSpecificBlog(id!);
  const [deleteForm, setDeleteForm] = useState(false);
  const [isDeleteBlogBtnLoading, setIsDeleteBlogBtnLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleToggleDeleteBlog() {
    setDeleteForm(true);
  }
  function handleCancelDelete() {
    setDeleteForm(false);
  }
  async function handleDeleteBlog() {
    try {
      isPending && setIsDeleteBlogBtnLoading(true);
      const deletedBlog = await deleteBlog();
      if (deletedBlog) {
        navigate("/dashboard/blogs", { replace: true });
      }
    } catch (err) {
      console.log(err);
      if (isAxiosError(err)) {
        setError(err.response?.data.message);
      }
    }
  }

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 4,
          bgcolor: "#f9f9f9",
          width: { sm: "85%", md: "65%" },
          margin: "0 auto",
          mt: 4,
        }}
      >
        <Stack spacing={3}>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} gap={1}>
              <Notes fontSize="large" color="secondary" />
              <Typography variant="h4" fontWeight="bold" color="secondary">
                A Detailed Blog View
              </Typography>
            </Stack>
            <Stack gap={1}>
              {blog?.blogAuthor ? (
                <>
                  <Typography color="primary" variant="subtitle1" gutterBottom>
                    {" "}
                    Author Details:{" "}
                  </Typography>
                  <Chip color="secondary" icon={<Person />}>
                    {blog?.blogAuthor?.userName}
                  </Chip>
                  <Chip color="primary" icon={<Email />}>
                    {blog?.blogAuthour?.email}
                  </Chip>
                </>
              ) : (
                <>
                  <Button
                    endIcon={<Edit />}
                    variant="contained"
                    href={`create/${blog?.id}`}
                    color="secondary"
                  >
                    <Typography variant="body2" sx={{ textWrap: "nowrap" }}>
                      Update
                    </Typography>
                  </Button>
                  <Button
                    endIcon={<Delete />}
                    variant="contained"
                    onClick={handleToggleDeleteBlog}
                    color="error"
                    disabled={deleteForm}
                  >
                    <Typography variant="body2" sx={{ textWrap: "nowrap" }}>
                      Delete
                    </Typography>
                  </Button>
                </>
              )}
            </Stack>
          </Stack>
          <Typography variant="body1" color="text.secondary">
            Take time to keenly study and Learn from this blog
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          {deleteForm && (
            <Box
              component={"section"}
              bgcolor={"#ff000"}
              border={"1px solid red"}
              p={2}
              borderRadius={1}
              width={{ xs: "100%", md: "70%" }}
            >
              <Typography variant="h6" gutterBottom color="error">
                Are you sure you want to delete this Blog?
              </Typography>
              <Stack direction={"row"} gap={2}>
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </Button>
                <Button
                  sx={{ textTransform: "none" }}
                  variant="outlined"
                  color="error"
                  onClick={handleDeleteBlog}
                  loading={isDeleteBlogBtnLoading}
                >
                  Yes, I'm Sure
                </Button>
              </Stack>
            </Box>
          )}
        </Stack>
      </Paper>

      <SingleBlog {...blog} />
    </>
  );
}

export default SingleUserBlogPage;
