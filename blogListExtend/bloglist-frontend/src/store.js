import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import blogReducer, { setBlogs } from "./reducers/blogReducers";

import blogService from "./services/blogs";

const store = configureStore(
  {
    reducer: {
      blogs: blogReducer,
    },
  },
  composeWithDevTools()
);

blogService.getAll().then((blogs) => store.dispatch(setBlogs(blogs)));

export default store;
