import { useSelector, useDispatch } from "react-redux";
import { voteOf, commentBlog } from "../reducers/blogReducers";
import { setNotif } from "../reducers/notifReducer";

//in this part, we handle that logged user can comment or like only blogs he doesnt posted himself
const SingleBlogPage = ({ blog }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const vote = (data) => {
    dispatch(voteOf(data));
    dispatch(setNotif(`Blog ${data.title} voted`, "success", 5));
  };

  const notVoteOwnBlog = () => {
    dispatch(setNotif("You cannot vote for your own blog !", "error", 5));
  };

  const handleComment = (e) => {
    e.preventDefault();

    const comment = e.target.comment.value;
    dispatch(commentBlog(blog, comment));
    e.target.comment.value = "";
    console.log("blog after comment: ", blog);
  };

  if (
    !blog ||
    blog === undefined ||
    blog.comments === undefined ||
    !blog.comments
  ) {
    return null;
  } else if (blog.user.username === user.username) {
    return (
      <div>
        <h3>
          {blog.title} by {blog.author}
        </h3>
        <div>
          <p>{blog.url}</p>
          <p>likes {blog.likes}</p>
          <button onClick={() => notVoteOwnBlog()}>Like</button>
          <p>posted by {blog.user.username}</p>
        </div>
        <h4>comments</h4>
        <ul>
          {blog.comments
            ? blog.comments.map((el, index) => {
                return <li key={index}>{el}</li>;
              })
            : null}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3>
          {blog.title} by {blog.author}
        </h3>
        <div>
          <p>{blog.url}</p>
          <p>likes {blog.likes}</p>
          <button onClick={() => vote(blog)}>Like</button>
          <p>posted by {blog.user.username}</p>
        </div>
        <h4>comments</h4>
        <form onSubmit={handleComment}>
          <input type="text" name="comment" />
          <button type="submit">add comment</button>
        </form>
        <ul>
          {blog.comments
            ? blog.comments.map((el, index) => {
                return <li key={index}>{el}</li>;
              })
            : null}
        </ul>
      </div>
    );
  }
};

export default SingleBlogPage;
