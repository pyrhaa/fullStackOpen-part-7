import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <h2>blog app</h2>
        <PagesRoute />
        <h2>create new blog</h2>

        <Footer />
      </div>
    );
  }
};

export default App;
