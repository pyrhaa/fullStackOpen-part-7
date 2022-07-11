import React from "react";
import ShowHide from "./ShowHide";
import { useSelector, useDispatch } from "react-redux";
import { voteOf, deleteBlog } from "../reducers/blogReducers";
import { setNotif } from "../reducers/notifReducer";

const Blog = () => {
  // const blogFullRef = useRef();
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

  const vote = (data) => {
    dispatch(voteOf(data));
    dispatch(setNotif(`Blog ${data.title} voted`, "success", 5));
  };

  const deleted = (id) => {
    dispatch(setNotif("Blog successfully deleted", "success", 5));
    dispatch(deleteBlog(id));
  };

  const FullBlogDetails = ({ blog }) => {
    if (blog.user.username !== user.username) {
      return (
        <div>
          <p>{blog.url}</p>
          <div>
            <p>likes {blog.likes}</p>
            <button
              id={blog.id}
              onClick={() => {
                vote(blog);
              }}
            >
              Like
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>{blog.url}</p>
          <div>
            <p>likes {blog.likes}</p>
            <button
              id={blog.id}
              onClick={() => {
                vote(blog);
              }}
            >
              Like
            </button>
            <button
              onClick={() => {
                deleted(blog.id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {blogs
        .slice()
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <div className="blog" style={blogStyle} key={blog.id}>
            <p className="blogTitle">{blog.title}</p>
            <p className="blogAuthor">by {blog.author}</p>
            <ShowHide className="showHide" buttonLabel="view">
              <FullBlogDetails blog={blog} className="blogDetails" />
            </ShowHide>
          </div>
        ))}
    </div>
  );
};

export default Blog;
