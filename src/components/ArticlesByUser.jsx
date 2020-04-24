import React, { Component } from 'react'
import { fetchAllArticles } from '../api'
import ArticleCard from './ArticleCard'

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

    console.log(articlesByUser, 'in articles by user')

    return (
      <div>
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
