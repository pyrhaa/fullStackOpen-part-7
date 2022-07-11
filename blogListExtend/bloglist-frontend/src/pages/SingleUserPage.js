import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";

const SingleUserPage = () => {
  const match = useMatch("/users/:id");
  const user = match
    ? useSelector((state) =>
        state.users.find((el) => el.id === match.params.id)
      )
    : null;

  if (!user || user === undefined) {
    return null;
  } else if (!user.blogs[0]) {
    return <h2>{user.name} have not blog to show yet !</h2>;
  } else {
    return (
      <div>
        <h2>{user.blogs[0].user.name}</h2>
        <h3>added blogs</h3>
        <ul>
          {user.blogs.map((blog) => {
            return <li key={blog.id}>{blog.title}</li>;
          })}
        </ul>
      </div>
    );
  }
};

export default SingleUserPage;
