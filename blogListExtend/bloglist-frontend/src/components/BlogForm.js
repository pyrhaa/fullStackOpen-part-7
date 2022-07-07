import { useDispatch } from "react-redux";
import { notifChange } from "../reducers/notifReducer";
import { createBlog } from "../reducers/blogReducers";

const BlogForm = () => {
  const dispatch = useDispatch();
  const create = async (e) => {
    e.preventDefault();
    const content = {
      title: e.target.title.value,
      author: e.target.author.value,
      url: e.target.url.value,
    };
    dispatch(createBlog(content));
    dispatch(notifChange(`<${content.title}> is created`, "success", 5));
    e.target.title.value = "";
    e.target.author.value = "";
    e.target.url.value = "";
  };

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

export default BlogForm;
