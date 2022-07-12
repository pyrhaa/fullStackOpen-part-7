import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/userReducer";

const Menu = ({ user }) => {
  const dispatch = useDispatch();

  const padding = {
    paddingRight: 5,
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <nav>
        <Link style={padding} to="/">
          Home
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
      </nav>
      <div>
        {user.name} logged-in <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Menu;
