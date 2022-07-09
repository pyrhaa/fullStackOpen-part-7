import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload.id;
      const changedBlog = action.payload;
      return state.map((blog) => (blog.id !== id ? blog : changedBlog));
    },
    deleting(state, action) {
      return state.filter((blog) => blog.id !== action.payload);
    },
    appendBlog(state, action) {
      state.push(action.payload);
    },
    setBlogs(state, action) {
      return action.payload;
    },
  },
});

export const { appendBlog, setBlogs, vote, deleting } = blogSlice.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const createBlog = (content) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(content);
    dispatch(appendBlog(newBlog));
  };
};

export const voteOf = (blog) => {
  return async (dispatch) => {
    const votedBlog = await blogService.update(blog.id, {
      ...blog,
      likes: blog.likes + 1,
    });
    dispatch(vote(votedBlog));
  };
};

export const deleteBlog = (id) => {
  return async (dispatch) => {
    await blogService.deletes(id);

    dispatch(deleting(id));
  };
};

export default blogSlice.reducer;
