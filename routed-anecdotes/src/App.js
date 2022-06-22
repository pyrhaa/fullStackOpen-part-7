import { useState } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import PagesRoute from './routes/PagesRoute';
import { useMatch } from 'react-router-dom';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ]);

  const [notification, setNotification] = useState('');

  const match = useMatch('/anecdotes/:id');
  const singleAnecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null;

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);
    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`the anecdote <${anecdote.content}> was created!`);
    setTimeout(() => setNotification(''), 5000);
  };

  return (
    <div>
      <h1>Software anecdotes</h1>

      <Menu />
      <PagesRoute
        anecdotes={anecdotes}
        anecdote={singleAnecdote}
        addNew={addNew}
        vote={vote}
        notification={notification}
      />
      <Footer />
    </div>
  );
};

export default App;
