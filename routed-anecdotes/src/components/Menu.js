import { Link, Route, Routes, Switch } from 'react-router-dom';
import About from './About';

const Menu = () => {
  const padding = {
    paddingRight: 5
  };
  return (
    <div>
      <nav>
        <Link style={padding} to="/">
          Home
        </Link>
        <Link style={padding} to="/anecdotes">
          anecdotes
        </Link>
        <Link style={padding} to="/create-new">
          create new
        </Link>
        <Link style={padding} to="/about">
          about
        </Link>
      </nav>
    </div>

    // <div>
    //   <a href="#" style={padding}>
    //     anecdotes
    //   </a>
    //   <a href="#" style={padding}>
    //     create new
    //   </a>
    //   <a href="#" style={padding}>
    //     about
    //   </a>
    // </div>
  );
};

export default Menu;
