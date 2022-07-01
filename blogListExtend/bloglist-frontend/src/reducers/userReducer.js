import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import blogService from "../services/blogs";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const login = (data) => {
  return async (dispatch) => {
    const { username, password } = data;
    const user = await loginService.login({
      username,
      password,
    });
    window.localStorage.setItem("loggedBlogUser", JSON.stringify(user));
    blogService.setToken(user.token);
    dispatch({
      type: "SET_USER",
      data: user,
    });
  };
};

export default userSlice.reducer;
