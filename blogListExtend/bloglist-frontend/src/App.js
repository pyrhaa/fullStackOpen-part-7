import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Blog from "./components/Blog";
// import Notification from "./components/Notification";
import BlogForm from "./components/BlogForm";
import Login from "./components/Login";
// import Togglable from "./components/Togglable";
// import blogService from "./services/blogs";
// import loginService from "./services/login";
import { initializeBlogs } from "./reducers/blogReducers";
import { settingUser } from "./reducers/userReducer";
import { initializeUsers } from "./reducers/usersReducer";

const App = () => {
  // const blogFormRef = useRef();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user Selector: ", user);

  useEffect(() => {
    dispatch(settingUser());
  }, []);

  useEffect(() => {
    dispatch(initializeBlogs());
    dispatch(initializeUsers());
  }, [dispatch]);

  if (user === null) {
    return (
      <div>
        <h2>log in to application</h2>
        <Login />
      </div>
    );
  }

  return (
    <div>
      <h2>blogs</h2>
      {/* <Notification res={message} text={notif} /> */}
      <div>
        logged-in <button>logout</button>
      </div>
      <h2>create new blog</h2>
      {/* <Togglable buttonLabel="Blog Form" ref={blogFormRef}> */}
      <BlogForm />
      {/* </Togglable> */}
      <Blog />
    </div>
  );
};

export default App;
