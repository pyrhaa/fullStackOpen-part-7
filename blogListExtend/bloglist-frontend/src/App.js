import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import { Container } from "@mui/material";
import Notification from "./components/Notification";
import Login from "./components/Login";
import MenuBar from "./components/MenuBar";
import PagesRoute from "./routes/PagesRoute";
import Footer from "./components/Footer";
import { initializeBlogs } from "./reducers/blogReducers";
import { settingUser } from "./reducers/userReducer";
import { initializeUsers } from "./reducers/usersReducer";
import Typography from "@mui/material/Typography";

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
      <Container>
        <Notification />
        <Login />
      </Container>
    );
  } else {
    return (
      <Container>
        <Notification />
        <MenuBar user={user} />
        <Typography
          variant="h2"
          gutterBottom
          component="div"
          align="center"
          color="primary"
        >
          Blog App
        </Typography>
        <PagesRoute blog={blog} />
        <Footer />
      </Container>
    );
  }
};

export default App;
