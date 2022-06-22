import { Routes, Route, Navigate } from 'react-router-dom';

import CreateNew from '../pages/CreateNew';
import Anecdotes from '../pages/Anecdotes';
import Anecdote from '../pages/Anecdote';
import About from '../pages/About';
import Home from '../pages/Home';

const PagesRoute = ({ anecdotes, anecdote, addNew, vote, notification }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/anecdotes"
          element={
            <Anecdotes anecdotes={anecdotes} notification={notification} />
          }
        />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} vote={vote} />}
        />
        <Route
          path="/create"
          element={
            notification ? (
              <Navigate replace to="/anecdotes" />
            ) : (
              <CreateNew addNew={addNew} />
            )
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default PagesRoute;
