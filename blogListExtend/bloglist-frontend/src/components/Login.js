import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();

  const handleLog = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    e.target.username.value = "";
    e.target.password.value = "";
    dispatch(login(username, password));
  };

  return (
    <div>
      <h2>log in to application</h2>
      <form onSubmit={handleLog}>
        <div>
          username
          <input type="text" name="username" />
        </div>
        <div>
          password
          <input type="password" name="password" />
        </div>
        <button id="login-button" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
