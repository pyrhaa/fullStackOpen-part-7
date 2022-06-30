import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import blogService from "../services/blogs";

const initialState = "";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const login = (data) => {
  return async (dispatch) => {
    try {
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
    } catch (exception) {
      return exception;
    }
  };
};

export default userSlice.reducer;
