import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UsersPage from "../pages/UsersPage";
import SingleUserPage from "../pages/SingleUserPage";

const PagesRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" />
        <Route path="/blogs/:id" />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<SingleUserPage />} />
      </Routes>
    </div>
  );
};

export default PagesRoute;
