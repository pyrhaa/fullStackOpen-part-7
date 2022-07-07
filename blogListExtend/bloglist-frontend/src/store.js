import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools, applyMiddleware } from "redux-devtools-extension";
import blogReducer, { setBlogs } from "./reducers/blogReducers";
import filterReducer from "./reducers/filterReducer";
import userReducer from "./reducers/userReducer";
import usersReducer from "./reducers/usersReducer";
import notifReducer from "./reducers/notifReducer";
import blogService from "./services/blogs";

const store = configureStore(
  {
    reducer: {
      blogs: blogReducer,
      user: userReducer,
      users: usersReducer,
      filter: filterReducer,
      notification: notifReducer,
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
);

blogService.getAll().then((blogs) => store.dispatch(setBlogs(blogs)));

export default store;
