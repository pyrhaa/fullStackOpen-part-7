import { useRef } from "react";
import Togglable from "../components/Togglable";
import BlogForm from "../components/BlogForm";
import Blog from "../components/Blog";

const Home = () => {
  const blogFormRef = useRef();

  return (
    <div>
      <Togglable buttonLabel="Blog Form" ref={blogFormRef}>
        <BlogForm />
      </Togglable>
      <Blog />
    </div>
  );
};

export default Home;
