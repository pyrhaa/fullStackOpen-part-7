import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { initializeUsers } from "../reducers/usersReducer";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(initializeUsers());
  }, [blogs]);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
