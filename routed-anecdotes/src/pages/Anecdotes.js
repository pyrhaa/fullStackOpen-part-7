import AnecdoteList from '../components/AnecdoteList';
import Notification from '../components/Notification';

const Anecdotes = ({ anecdotes, notification }) => {
  return (
    <div>
      {notification.length > 1 ? (
        <Notification notification={notification} />
      ) : null}
      <AnecdoteList anecdotes={anecdotes} />
    </div>
  );
};

export default Anecdotes;
