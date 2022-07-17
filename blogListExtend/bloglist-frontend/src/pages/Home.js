import { useRef } from "react";
import Togglable from "../components/Togglable";
import BlogForm from "../components/BlogForm";
import Blog from "../components/Blog";
import Typography from "@mui/material/Typography";

const Home = () => {
  const blogFormRef = useRef();

  return (
    <div>
      <Typography variant="h5" gutterBottom component="div">
        Create new blog
      </Typography>
      <Togglable buttonLabel="Blog Form" ref={blogFormRef}>
        <BlogForm />
      </Togglable>
      <Blog />
    </div>
  );
};

export default Home;
