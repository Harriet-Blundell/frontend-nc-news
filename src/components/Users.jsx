import React from 'react';

const UserLogIn = props => {
  return (
    <div>
      <form>
        Logged in:
        <label htmlFor="users">
          <select onChange={props.handleChange} name="username">
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
