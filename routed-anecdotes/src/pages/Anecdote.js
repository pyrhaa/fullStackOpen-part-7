const Anecdote = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.vote(props.anecdote.id);
  };

  return (
    <div>
      <h2>
        {props.anecdote.content} by {props.anecdote.author}
      </h2>
      <p>has {props.anecdote.votes} votes</p>
      <button onClick={handleClick}>vote</button>
      <p>
        for more info <a href={props.anecdote.info}>{props.anecdote.info}</a>
      </p>
    </div>
  );
};

export default Anecdote;
