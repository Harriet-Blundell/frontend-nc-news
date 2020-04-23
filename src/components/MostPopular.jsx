import React, { Component } from 'react'
import { fetchAllArticles } from '../api'
import ArticleCard from './ArticleCard'

class MostPopularArticles extends Component {
  state = {
    popularArticles: [],
    isLoading: true,
  }

  componentDidMount() {
    return fetchAllArticles({ sort_by: 'comment_count' }).then(
      ({ articles }) => {
        const highestArticleComments = articles.filter((article) => {
          return article.comment_count > 10
        })

        this.setState({
          popularArticles: highestArticleComments,
          isLoading: false,
        })
      }
    )
  }

  render() {
    const { popularArticles, isLoading } = this.state

    if (isLoading) {
      return <p>Loading Home Page...</p>
    }

    return (
      <div>
        <h2 className='mostPopularTitle'>Most Popular Articles</h2>
        <ul>
          {popularArticles.map((article) => {
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

export default MostPopularArticles
