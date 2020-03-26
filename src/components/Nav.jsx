import React from 'react';
import './Nav.css';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav className="navigationBar">
      <div className="navigationContainer">
        <li className="home">
          <Link to="/" className="home-link">
            <img
              src="https://www.flaticon.com/premium-icon/icons/svg/61/61972.svg"
              alt="home icon"
              className="homeIcon"
            />
            HOME
          </Link>
        </li>
        <li>
          <Link to="/topics" className="topic-link">
            <img
              src="https://www.flaticon.com/premium-icon/icons/svg/2549/2549434.svg"
              alt="topic icon"
              className="topicIcon"
            />
            TOPICS
          </Link>
        </li>
        <li>
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/2549/2549424.svg"
            alt="article icon"
            className="articleIcon"
          />
          <Link to="/articles" className="articles-link">
            ARTICLES
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Nav;
