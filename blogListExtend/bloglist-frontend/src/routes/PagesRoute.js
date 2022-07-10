import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const PagesRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blogs" />
        <Route path="/blogs/:id" />
        <Route path="/users" />
        <Route path="/users/:id" /> */}
      </Routes>
    </div>
  );
};

export default PagesRoute;
