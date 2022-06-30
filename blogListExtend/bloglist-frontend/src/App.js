import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Blog from "./components/Blog";
// import Notification from "./components/Notification";
// import BlogForm from "./components/BlogForm";
// import Togglable from "./components/Togglable";
// import blogService from "./services/blogs";
// import loginService from "./services/login";
import { initializeBlogs } from "./reducers/blogReducers";

const App = () => {
  // const [blogs, setBlogs] = useState([]);
  // const [message, setMessage] = useState(null);
  // const [notif, setNotif] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);

  // const blogFormRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeBlogs());
  }, [dispatch]);

  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
  //   if (loggedUserJSON) {
  //     const user = JSON.parse(loggedUserJSON);
  //     setUser(user);
  //     blogService.setToken(user.token);
  //   }
  // }, []);

  // const addBlog = async (blogObject) => {
  //   try {
  //     blogFormRef.current.toggleVisibility();
  //     const creaBlog = await blogService.create(blogObject);
  //     setBlogs(blogs.concat(creaBlog));
  //     setMessage(true);
  //     setNotif(`A new blog <<${creaBlog.title}>> by ${creaBlog.author} added`);
  //     setTimeout(() => {
  //       setMessage(null);
  //     }, 5000);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const deleteBlog = async (id) => {
  //   try {
  //     console.log("before:", blogs);
  //     const deletedBlog = await blogService.deletes(id);
  //     console.log("deletdblog:", deletedBlog);
  //     setBlogs(blogs.filter((blog) => blog.id !== id));
  //     console.log("after:", blogs);
  //     setMessage(true);
  //     setNotif("The blog have been removed");
  //     setTimeout(() => {
  //       setMessage(null);
  //     }, 5000);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const updateBlog = async (blogObject) => {
  //   try {
  //     const id = blogObject.id;
  //     const updatedBlog = await blogService.update(id, blogObject);
  //     setBlogs(blogs.filter((blog) => blog.id !== id).concat(updatedBlog));
  //     setMessage(true);
  //     setNotif(
  //       `The blog <<${updatedBlog.title}>> have ${updatedBlog.likes} likes now !`
  //     );
  //     setTimeout(() => {
  //       setMessage(null);
  //     }, 5000);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleLog = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const user = await loginService.login({ username, password });
  //     window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
  //     blogService.setToken(user.token);
  //     setUser(user);
  //     setUsername("");
  //     setPassword("");
  //   } catch (err) {
  //     setMessage(false);
  //     setNotif("wrong username or password");
  //     console.log(err);
  //     setTimeout(() => {
  //       setMessage(null);
  //     }, 5000);
  //   }
  // };

  // const logout = (e) => {
  //   e.preventDefault();
  //   window.localStorage.clear();
  //   window.location.reload(false);
  // };

  // if (user === null) {
  //   return (
  //     <div>
  //       <Notification res={message} text={notif} />
  //       <h2>log in to application</h2>
  //       <form onSubmit={handleLog}>
  //         <div>
  //           username
  //           <input
  //             id="username"
  //             type="text"
  //             value={username}
  //             name="Username"
  //             onChange={({ target }) => setUsername(target.value)}
  //           />
  //         </div>
  //         <div>
  //           password
  //           <input
  //             id="password"
  //             type="password"
  //             value={password}
  //             name="Password"
  //             onChange={({ target }) => setPassword(target.value)}
  //           />
  //         </div>
  //         <button id="login-button" type="submit">
  //           login
  //         </button>
  //       </form>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h2>blogs</h2>
      {/* <Notification res={message} text={notif} /> */}
      {/* <div>
        {user.name} logged-in <button onClick={logout}>logout</button>
      </div> */}
      <h2>create new blog</h2>
      {/* <Togglable buttonLabel="Blog Form" ref={blogFormRef}>
        <BlogForm createBlog={addBlog} />
      </Togglable> */}
      <Blog />
    </div>
  );
};

export default App;
