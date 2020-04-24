import React from 'react'
import { Link } from '@reach/router'

const UsersList = (props) => {
  const { users } = props

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              Username:
              <Link to={`/articles/${user.username}`}>{user.username}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UsersList
