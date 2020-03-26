import React from 'react';
import './Header.css';
import Users from './Users';

const Header = props => {
  return (
    <div className="headerContainer">
      <h1 className="NCNewsTitle">
        <span className="headerTitleLetter">N</span>C NEWS
      </h1>
      <div className="userButton">
        <Users
          users={props.users}
          username={props.username}
          handleChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default Header;
