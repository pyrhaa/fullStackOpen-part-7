import { Routes, Route } from 'react-router-dom';
import CreateNew from '../pages/CreateNew';
import Anecdotes from '../pages/Anecdotes';
import About from '../pages/About';
import Home from '../pages/Home';

const PagesRoute = ({ anecdotes }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/anecdotes"
          element={<Anecdotes anecdotes={anecdotes} />}
        />
        <Route path="/create" element={<CreateNew />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default PagesRoute;
