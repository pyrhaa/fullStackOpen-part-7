import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UsersPage from "../pages/UsersPage";
import SingleUserPage from "../pages/SingleUserPage";
import SingleBlogPage from "../pages/SingleBlogPage";

const PagesRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<SingleUserPage />} />
      </Routes>
    </div>
  );
};

export default PagesRoute;
