import { connect } from "react-redux";
import { login } from "../reducers/userReducer";

const Login = (props) => {
  const handleLog = async (e) => {
    e.preventDefault();
    const logger = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    props.login(logger);
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

const mapDispatchToProps = (dispatch) => {
  return {
    login: (value) => {
      dispatch(login(value));
    },
  };
};

const ConnectedLogin = connect(null, mapDispatchToProps)(Login);
export default ConnectedLogin;
