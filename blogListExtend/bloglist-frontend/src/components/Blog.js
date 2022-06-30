// import ShowHide from "./ShowHide";
import { useDispatch, useSelector } from "react-redux";
import { voteOf } from "../reducers/blogReducers";

const Blog = () => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const blogs = useSelector((state) => {
    // if (state.filter.length) {
    //   return state.blogs.filter((el) =>
    //     el.content.toLowerCase().includes(state.filter)
    //   );
    // } else {
    return state.blogs;
  });
  const dispatch = useDispatch();

  const vote = (arg) => {
    const data = arg;
    dispatch(voteOf(data.id));
    // dispatch(notifChange(`You voted for <${data.content}>`, 5));
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

  const FullBlogDetails = ({ blogs }) => {
    return (
      <div>
        <p>{blogs.url}</p>
        <div>
          <p>likes {blogs.likes}</p>
          {/* <button id="likeBtn" onClick={vote(blogs)}>
            Like
          </button> */}
        </div>
      </div>
    );
  };

  return (
    <div>
      {blogs
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map((blog) => (
          <div className="blog" style={blogStyle} key={blog.id}>
            <p className="blogTitle">{blog.title}</p>
            <p className="blogAuthor">by {blog.author}</p>
            {/* <ShowHide className="showHide" buttonLabel="view" ref={blogFullRef}> */}
            <FullBlogDetails blogs={blog} className="blogDetails" />
            {/* </ShowHide> */}
            <button>Remove</button>
          </div>
        ))}
    </div>
  );
};

export default Blog;
