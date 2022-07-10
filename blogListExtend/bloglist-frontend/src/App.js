import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Blog from "./components/Blog";
import Notification from "./components/Notification";
import BlogForm from "./components/BlogForm";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Togglable from "./components/Togglable";
import { initializeBlogs } from "./reducers/blogReducers";
import { settingUser } from "./reducers/userReducer";
import { initializeUsers } from "./reducers/usersReducer";

const App = () => {
  const blogFormRef = useRef();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(settingUser());
    dispatch(initializeBlogs());
    dispatch(initializeUsers());
  }, [dispatch]);

  if (user === null) {
    return (
      <div>
        <Notification />
        <Login />
      </div>
    );
  } else {
    return (
      <div>
        <Notification />
        <Menu user={user} />
        <h2>blogs</h2>

        <h2>create new blog</h2>
        <Togglable buttonLabel="Blog Form" ref={blogFormRef}>
          <BlogForm />
        </Togglable>
        <Blog />
        <Footer />
      </div>
    );
  }
};

export default App;
