import { Routes, Route } from 'react-router-dom';

import CreateNew from '../pages/CreateNew';
import Anecdotes from '../pages/Anecdotes';
import Anecdote from '../pages/Anecdote';
import About from '../pages/About';
import Home from '../pages/Home';

const PagesRoute = ({ anecdotes, anecdote, login, user }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/anecdotes"
          element={<Anecdotes anecdotes={anecdotes} />}
        />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} />}
        />
        <Route path="/create" element={<CreateNew />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default PagesRoute;
