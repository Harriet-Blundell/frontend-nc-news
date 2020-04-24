import React from 'react'
import { Link } from '@reach/router'
import './UsersPage.css'

const UsersList = (props) => {
  const { users } = props

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <Link to={`/articles/users/${user.username}`}>
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
