import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <div>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </div>
  );

  const greetUser = () => (
    <div>
      <h3>Hello, {currentUser.username}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );

  return currentUser ? greetUser() : sessionLinks();
}

export default Greeting;
