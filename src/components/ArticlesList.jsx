import React, { Component } from 'react';
import { fetchAllArticles } from '../api';
import ArticleCard from './ArticleCard';
import './ArticleCard.css';
import SortBy from './SortBy';
import Order from './Order';
import { deleteArticleById, postArticle } from '../api';
import PostArticle from './PostArticle';

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

  deleteArticle = articleId => {
    deleteArticleById(articleId).then(() => {
      this.setState(prevState => {
        const filteredArticles = prevState.articles.filter(article => {
          return article.article_id !== articleId;
        });
        return {
          articles: filteredArticles
        };
      });
    });
  };

  postNewArticle = newArticle => {
    postArticle(newArticle).then(({ article }) => {
      this.setState(currentState => {
        return {
          articles: [article, ...currentState.articles]
        };
      });
    });
  };

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading articles...</p>;
    }
    return (
      <div>
        <SortBy handleChange={this.handleChange} />
        <Order handleChange={this.handleChange} />

        {this.props.username !== 'guest' && (
          <PostArticle postNewArticle={this.postNewArticle} />
        )}

        <h2 className="article_title">Articles:</h2>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.article_id} className="article_list">
                <ArticleCard
                  article={article}
                  username={this.props.username}
                  deleteArticle={this.deleteArticle}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesList;
