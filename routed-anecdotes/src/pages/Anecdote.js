// import AnecdoteList from '../components/AnecdoteList';

const Anecdote = ({ anecdote, vote }) => {
  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>has {anecdote.votes} votes</p>
      <button onClick={vote}>vote</button>
      <p>
        for more info <a href={anecdote.info}>{anecdote.info}</a>
      </p>
    </div>
  );
};

export default Anecdote;
