import React from 'react';
import './Nav.css';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <div className="navigation-bar">
      <Link to="/" className="home-link">
        Home
      </Link>
      <Link to="/topics" className="topic-link">
        Topics
      </Link>
      <Link to="/articles" className="articles-link">
        Articles
      </Link>
    </div>
  );
};

export default Nav;
