import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../reducers/blogReducers";
import { setNotif } from "../reducers/notifReducer";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

// here too, a blog can be removed only by the user who posted it
const Blog = () => {
  // const blogStyle = {
  //   paddingTop: 10,
  //   paddingLeft: 2,
  //   border: "solid",
  //   borderWidth: 1,
  //   marginBottom: 5,
  // };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const user = useSelector((state) => state.user);

  const blogs = useSelector((state) => {
    if (state.filter.length) {
      return state.blogs.filter((el) =>
        el.content.toLowerCase().includes(state.filter)
      );
    } else {
      return state.blogs;
    }
  });

  const dispatch = useDispatch();

  const deleted = (id) => {
    dispatch(setNotif("Blog successfully deleted", "success", 5));
    dispatch(deleteBlog(id));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {blogs
          .slice()
          .sort((a, b) => b.likes - a.likes)
          .map((blog) => {
            if (blog.user.username !== user.username) {
              return (
                <Grid item xs={2} sm={4} md={4} key={blog.id}>
                  <Item>
                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                  </Item>
                </Grid>
              );
            } else {
              return (
                <Grid item xs={2} sm={4} md={4} key={blog.id}>
                  <Item>
                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      onClick={() => deleted(blog.id)}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </Item>
                </Grid>
              );
            }
          })}
      </Grid>
    </Box>
  );
};

export default Blog;
