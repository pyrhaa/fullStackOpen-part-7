import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import blogReducer, { setBlogs } from "./reducers/blogReducers";
import filterReducer from "./reducers/filterReducer";
import blogService from "./services/blogs";

const store = configureStore(
  {
    reducer: {
      blogs: blogReducer,
      filter: filterReducer,
    },
  },
  composeWithDevTools()
);

blogService.getAll().then((blogs) => store.dispatch(setBlogs(blogs)));

export default store;
