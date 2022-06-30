import { connect } from "react-redux";
import { createBlog } from "../reducers/blogReducers";

const BlogForm = (props) => {
  const create = async (e) => {
    e.preventDefault();
    const content = {
      title: e.target.title.value,
      author: e.target.author.value,
      url: e.target.url.value,
    };
    props.createBlog(content);
    // props.notifChange(`<${content}> is created`, 5);
    e.target.title.value = "";
    e.target.author.value = "";
    e.target.url.value = "";
  };

  // const addBlog = (e) => {
  //   e.preventDefault();
  //   createBlog({
  //     title: newBlog.title,
  //     author: newBlog.author,
  //     url: newBlog.url,
  //   });
  //   setNewBlog({ title: "", author: "", url: "" });
  // };

  return (
    <form className="form" onSubmit={create}>
      <div>
        title:
        <input className="titleInput" type="text" name="title" />
      </div>
      <div>
        author:
        <input className="authorInput" type="text" name="author" />
      </div>
      <div>
        url:
        <input className="urlInput" type="text" name="url" />
      </div>
      <button className="submitBtn" type="submit">
        create
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (value) => {
      dispatch(createBlog(value));
    },
  };
};

const ConnectedBlogForm = connect(null, mapDispatchToProps)(BlogForm);
export default ConnectedBlogForm;
