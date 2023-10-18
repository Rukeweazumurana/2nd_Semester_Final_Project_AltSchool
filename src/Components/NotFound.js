import React from 'react';
import '../Styles/PageNotFound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h3>Oops! Page not found</h3>
      <p>Go back to the home page.</p>
      <a href="/" className="home">
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
