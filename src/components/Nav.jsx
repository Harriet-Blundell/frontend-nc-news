import React from 'react';
import './Nav.css';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <div className="navigation-bar">
      <Link to="/" className="home-link">
        <span className="home-link-nav">H</span>
        ome
      </Link>
      <Link to="/topics" className="topic-link">
        <span className="topic-link-letter">T</span>
        opics
      </Link>
      <Link to="/articles" className="articles-link">
        <span className="article-link-letter">A</span>
        rticles
      </Link>
    </div>
  );
};

export default Nav;
