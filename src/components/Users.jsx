import React from 'react';
import './Header.css';

const UserLogIn = props => {
  return (
    <div>
      <form className="user-container">
        <p className="login-message">Please log in here</p>
        USER:
        <label htmlFor="users">
          <select
            onChange={props.handleChange}
            name="username"
            className="usersOptions"
          >
            <option>guest</option>
            {props.users.map(user => {
              return <option key={user.username}>{user.username}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export default UserLogIn;
