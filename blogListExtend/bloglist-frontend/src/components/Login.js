import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
// import notifChange from "../reducers/notifReducer";

const Login = () => {
  const dispatch = useDispatch();

  const handleLog = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    // if (!username || username === "" || !password || password === "") {
    //   dispatch(notifChange("Fill the form", "error", 5));
    // }

    dispatch(login(username, password)).then(() => {
      console.log("after login");
    });

    // dispatch(notifChange(`<${username}> is logged in`, "success", 5));
    // dispatch(notifChange("wrong username or password", "error", 5));
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
