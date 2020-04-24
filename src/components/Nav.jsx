import React from 'react'
import './Nav.css'
import { Link } from '@reach/router'

const Nav = () => {
  return (
    <nav className='navigationBar'>
      <div className='navigationContainer'>
        <div>
          <li className='home-li'>
            <Link to='/' className='home-link'>
              <img
                src='https://www.flaticon.com/premium-icon/icons/svg/61/61972.svg'
                alt='home icon'
                className='homeIcon'
              />
              HOME
            </Link>
          </li>
        </div>
        <div>
          <li className='topic-li'>
            <Link to='/topics' className='topic-link'>
              <img
                src='https://www.flaticon.com/premium-icon/icons/svg/2549/2549434.svg'
                alt='topic icon'
                className='topicIcon'
              />
              TOPICS
            </Link>
          </li>
        </div>
        <div>
          <li className='article-li'>
            <Link to='/articles' className='articles-link'>
              <img
                src='https://www.flaticon.com/premium-icon/icons/svg/2549/2549424.svg'
                alt='article icon'
                className='articleIcon'
              />
              ARTICLES
            </Link>
          </li>
        </div>
        <div>
          <li className='user-li'>
            <Link to='/users' className='users-link'>
              <img
                src='https://image.flaticon.com/icons/svg/615/615075.svg'
                alt='user icon'
                className='userIcon'
              />
              USERS
            </Link>
          </li>
        </div>
      </div>
    </nav>
  )
}

export default Nav
