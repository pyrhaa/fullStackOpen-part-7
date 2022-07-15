import { useDispatch } from "react-redux";
import { setNotif } from "../reducers/notifReducer";
import { login } from "../reducers/userReducer";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const Login = () => {
  const dispatch = useDispatch();

  const handleLog = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(login(username, password));

    if (username && password) {
      dispatch(setNotif(`<${username}> is logged in`, "success", 5));
    }
  };

  return (
    <Stack
      component="form"
      sx={{
        width: "25ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      onSubmit={handleLog}
    >
      <h2>log in to application</h2>
      <form onSubmit={handleLog}>
        <TextField
          id="filled-username-input"
          label="Username"
          type="text"
          variant="filled"
        />

        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <button id="login-button" type="submit">
          login
        </button>
      </form>
    </Stack>
  );
};

export default Login;
