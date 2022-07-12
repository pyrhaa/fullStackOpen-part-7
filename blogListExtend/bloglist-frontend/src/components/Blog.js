import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../reducers/blogReducers";
import { setNotif } from "../reducers/notifReducer";

// here too, a blog can be removed only by the user who posted it
const Blog = () => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const user = useSelector((state) => state.user);

  const blogs = useSelector((state) => {
    if (state.filter.length) {
      return state.blogs.filter((el) =>
        el.content.toLowerCase().includes(state.filter)
      );
    } else {
      return state.blogs;
    }
  });

  const dispatch = useDispatch();

  const deleted = (id) => {
    dispatch(setNotif("Blog successfully deleted", "success", 5));
    dispatch(deleteBlog(id));
  };

  return (
    <div>
      {blogs
        .slice()
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => {
          if (blog.user.username !== user.username) {
            return (
              <div className="blog" style={blogStyle} key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </div>
            );
          } else {
            return (
              <div className="blog" style={blogStyle} key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                <div>
                  <button onClick={() => deleted(blog.id)}>Remove</button>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Blog;
