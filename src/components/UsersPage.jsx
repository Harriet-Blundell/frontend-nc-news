import React from 'react'
import { Link } from '@reach/router'
import './UsersPage.css'

const UsersList = (props) => {
  const { users } = props

  return (
    <div className='usersDiv'>
      <h1>Users</h1>
      <ul className='usersListContainer'>
        {users.map((user, index) => {
          return (
            <li key={index} className='individualUser'>
              <Link
                to={`/articles/users/${user.username}`}
                className='username-link'
              >
                {user.username}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UsersList
