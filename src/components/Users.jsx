import React from 'react'
import './Header.css'

const UserLogIn = (props) => {
  return (
    <div className='userDiv'>
      <form className='userContainer'>
        {props.username === 'guest' ? (
          <p className='login-message'>Please log in here</p>
        ) : (
          <p className='currentUser'>Currently logged in as {props.username}</p>
        )}
        USER:
        <label htmlFor='users'>
          <select
            onChange={props.handleChange}
            name='username'
            className='usersOptions'
          >
            <option>guest</option>
            {props.users.map((user) => {
              return <option key={user.username}>{user.username}</option>
            })}
          </select>
        </label>
      </form>
    </div>
  )
}

export default UserLogIn
