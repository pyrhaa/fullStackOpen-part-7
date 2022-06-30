import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import blogService from "../services/blogs";

const initialState = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
    logout(state = null, action) {
      return state;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const login = (data) => {
  return async (dispatch) => {
    const { username, password } = data;
    const user = await loginService.login({
      username,
      password,
    });
    blogService.setToken(user.token);
    window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
    dispatch(setUser(user));
  };
};

export const logOut = () => {
  return logOut;
};

export default userSlice.reducer;
