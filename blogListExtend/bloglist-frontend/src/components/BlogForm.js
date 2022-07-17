import { useDispatch } from "react-redux";
import { setNotif } from "../reducers/notifReducer";
import { createBlog } from "../reducers/blogReducers";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const BlogForm = () => {
  const dispatch = useDispatch();
  const create = async (e) => {
    e.preventDefault();
    const content = {
      title: e.target[0].value,
      author: e.target[1].value,
      url: e.target[2].value,
    };
    dispatch(createBlog(content));
    dispatch(
      setNotif(`Blog ${content.title} successfully created`, "success", 5)
    );
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };

  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={create}>
          <TextField
            id="filled-title-input"
            label="Title"
            type="text"
            variant="filled"
            margin="normal"
            required
            fullWidth
            autoFocus
          />
          <TextField
            id="filled-author-input"
            label="Author"
            type="text"
            variant="filled"
            margin="normal"
            required
            fullWidth
            autoFocus
          />
          <TextField
            id="filled-url-input"
            label="Url"
            type="text"
            variant="filled"
            margin="normal"
            required
            fullWidth
            autoFocus
          />
          <Button
            id="create-button"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            create
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default BlogForm;
