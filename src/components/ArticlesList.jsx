import React, { Component } from 'react';
import { fetchAllArticles } from '../api';
import ArticleCard from './ArticleCard';
import './ArticleCard.css';
import SortBy from './SortBy';
import Order from './Order';

class ArticlesList extends Component {
  state = {
    articles: [],
    sort_by: '',
    order: '',
    isLoading: true
  };

  componentDidMount() {
    fetchAllArticles({
      topic: this.props.slug,
      sort_by: this.state.sort_by,
      order: this.state.order
    }).then(({ articles }) => {
      this.setState({
        articles: articles,
        isLoading: false
      });
    });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate(prevProp, prevState) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    ) {
      fetchAllArticles({
        topic: this.props.slug,
        sort_by: this.state.sort_by,
        order: this.state.order
      }).then(({ articles }) => {
        this.setState({
          articles: articles,
          isLoading: false
        });
      });
    }
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading articles...</p>;
    }

    return (
      <div>
        <SortBy handleChange={this.handleChange} />
        <Order handleChange={this.handleChange} />
        <h2>Articles:</h2>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.article_id} className="article_list">
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
