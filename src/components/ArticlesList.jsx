import React, { Component } from 'react';
import { fetchAllArticles } from '../api';
import ArticleCard from './ArticleCard';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    fetchAllArticles().then(({ articles }) => {
      this.setState({
        articles: articles,
        isLoading: false
      });
    });
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading articles...</p>;
    }

    return (
      <div>
        <h2>Articles:</h2>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.article_id}>
                <ArticleCard article={article} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesList;
