import React from 'react';
import './Header.css';
import Users from './Users';

const Header = props => {
  return (
    <div className="header_container">
      <h1 className="NCNewsTitle">
        <span className="headerTitleLetter">N</span>C News
      </h1>
      <div className="userButton">
        <Users users={props.users} handleChange={props.handleChange} />
      </div>
    </div>
  );
};

export default Header;
