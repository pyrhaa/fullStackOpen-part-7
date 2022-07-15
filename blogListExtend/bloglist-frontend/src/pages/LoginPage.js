import { useDispatch } from "react-redux";
import { setNotif } from "../reducers/notifReducer";
import { login } from "../reducers/userReducer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLog = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    dispatch(login(username, password));

    if (username && password) {
      dispatch(setNotif(`<${username}> is logged in`, "success", 5));
    }
  };

  return (
    <Paper>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in to application
        </Typography>
        <form onSubmit={handleLog}>
          <TextField
            id="filled-username-input"
            label="Username"
            type="text"
            variant="filled"
            margin="normal"
            required
            fullWidth
            autoFocus
          />

          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            margin="normal"
            required
            fullWidth
            autoFocus
          />

          <Button
            id="login-button"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            login
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default LoginPage;
