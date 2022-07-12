import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import Notification from "./components/Notification";
import Login from "./components/Login";
import Menu from "./components/Menu";
import PagesRoute from "./routes/PagesRoute";
import Footer from "./components/Footer";
import { initializeBlogs } from "./reducers/blogReducers";
import { settingUser } from "./reducers/userReducer";
import { initializeUsers } from "./reducers/usersReducer";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(settingUser());
    dispatch(initializeBlogs());
    dispatch(initializeUsers());
  }, [dispatch]);

  const match = useMatch("/blogs/:id");
  const blog = match ? blogs.find((el) => el.id === match.params.id) : null;

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
        <h2>blog app</h2>
        <PagesRoute blog={blog} />

        <Footer />
      </div>
    );
  }
};

export default App;
