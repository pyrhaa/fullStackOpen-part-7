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
    logOut() {
      return null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

export const settingUser = () => {
  const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
  if (loggedUserJSON) {
    return async (dispatch) => {
      const user = await JSON.parse(loggedUserJSON);
      blogService.setToken(user.token);
      dispatch(setUser(user));
    };
  }

  return logOut();
};

export const logout = () => {
  return (dispatch) => {
    window.localStorage.removeItem("loggedBlogappUser");
    dispatch(logOut());
  };
};

export const login = (data) => {
  return async (dispatch) => {
    const { username, password } = data;
    const user = await loginService.login({
      username,
      password,
    });
    window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
    blogService.setToken(user.token);
    dispatch(settingUser());
  };
};

export default userSlice.reducer;
