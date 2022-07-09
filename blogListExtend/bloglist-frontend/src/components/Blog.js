import React from "react";
import ShowHide from "./ShowHide";
import { useSelector, useDispatch } from "react-redux";
import { voteOf } from "../reducers/blogReducers";
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
    dispatch(voteOf(data.id));
    dispatch(setNotif(`Blog ${data.title} voted`, "success", 5));
  };

  // const likeUp = (e) => {
  //   e.preventDefault();
  //   const updatedBlog = {
  //     ...blog,
  //     likes: blog.likes + 1,
  //   };
  //   upBlog(updatedBlog);
  // };

  // const deleted = (e) => {
  //   e.preventDefault();
  //   if (window.confirm(`Delete ${blog.title}`)) {
  //     removeBlog(blog.id);
  //   }
  // };

  const FullBlogDetails = ({ blog }) => {
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
            <button>Remove</button>
          </div>
        ))}
    </div>
  );
};

export default Blog;
