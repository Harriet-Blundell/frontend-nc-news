import React, { Component } from 'react'
import { fetchAllArticles } from '../api'
import ArticleCard from './ArticleCard'
import { Link } from '@reach/router'
import './UsersPage.css'

class ArticleByUser extends Component {
  state = {
    articlesByUser: [],
    isLoading: true,
  }

  componentDidMount() {
    fetchAllArticles({ author: this.props.username }).then(({ articles }) => {
      this.setState({
        articlesByUser: articles,
        isLoading: false,
      })
    })
  }

  render() {
    const { articlesByUser, isLoading } = this.state

    if (isLoading) {
      return <p>Loading {this.props.username}'s articles</p>
    }

    return (
      <div>
        <h1>Articles by {this.props.username}</h1>
        <button className='backBtn'>
          <Link to='/users' className='backBtnLink'>
            Go Back
          </Link>
        </button>
        <ul>
          {articlesByUser.map((article) => {
            return (
              <li key={article.article_id} className='articleListContainer'>
                <ArticleCard article={article} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ArticleByUser
