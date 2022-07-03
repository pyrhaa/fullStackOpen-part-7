import loginService from "../services/login";
import blogService from "../services/blogs";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "INIT_USER":
      return action.user;
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return action.user;
    default:
      return state;
  }
};

export const settingUser = () => {
  const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON);
    blogService.setToken(user.token);
    return {
      type: "INIT_USER",
      user: user,
    };
  }

  return {
    type: "INIT_USER",
    user: null,
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    const user = await loginService.login({
      username,
      password,
    });

    window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
    blogService.setToken(user.token);
    dispatch({
      type: "LOGIN",
      user: user,
    });
  };
};

export const logout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("loggedBlogappUser");
    dispatch({
      type: "LOGOUT",
      user: null,
    });
  };
};

export default userReducer;
