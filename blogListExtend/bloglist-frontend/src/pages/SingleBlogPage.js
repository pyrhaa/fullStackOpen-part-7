import { useSelector, useDispatch } from "react-redux";
import { useMatch } from "react-router-dom";
import { voteOf } from "../reducers/blogReducers";
import { setNotif } from "../reducers/notifReducer";

const SingleBlogPage = () => {
  const user = useSelector((state) => state.user);

  const match = useMatch("/blogs/:id");
  const blog = match
    ? useSelector((state) =>
        state.blogs.find((el) => el.id === match.params.id)
      )
    : null;
  const dispatch = useDispatch();

  const vote = (data) => {
    dispatch(voteOf(data));
    dispatch(setNotif(`Blog ${data.title} voted`, "success", 5));
  };

  const notVoteOwnBlog = () => {
    dispatch(setNotif("You cannot vote for your own blog !", "error", 5));
  };

  if (!blog || blog === undefined) {
    return null;
  } else if (
    blog.user.username === user.username ||
    blog.user.username === undefined
  ) {
    return (
      <div>
        <h3>{blog.title}</h3>
        <p>by {blog.author}</p>
        <p>{blog.url}</p>
        <p>posted by {blog.user.username}</p>
        <div>
          <p>likes {blog.likes}</p>
          <button onClick={() => notVoteOwnBlog()}>Like</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{blog.title}</h3>
        <p>by {blog.author}</p>
        <p>{blog.url}</p>
        <p>posted by {blog.user.username}</p>
        <div>
          <p>likes {blog.likes}</p>
          <button onClick={() => vote(blog)}>Like</button>
        </div>
      </div>
    );
  }
};

export default SingleBlogPage;
