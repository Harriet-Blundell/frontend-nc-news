import React, { Component } from 'react';
import { fetchArticleById } from '../api';
import './ArticleCard.css';
import CommentsList from './CommentsList';

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true
  };

  componentDidMount() {
    fetchArticleById(this.props.id).then(({ article }) => {
      this.setState({
        article: article,
        isLoading: false
      });
    });
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.id !== this.props.id) {
      fetchArticleById(this.props.id).then(({ article }) => {
        return {
          article: article,
          isLoading: false
        };
      });
    }
  }

  render() {
    const { article, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading article...</p>;
    }

    return (
      <div className="singleArticleById">
        <h2>Article:</h2>

        <h3>{article.title}</h3>
        <p className="singleArticle_generalinfo">General Information:</p>
        {article.body}
        <p>Votes: {article.votes}</p>
        <p>Topic: {article.topic}</p>
        <p>Posted by: {article.author}</p>
        <p>Date: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>
        <CommentsList articleId={article.article_id} />
      </div>
    );
  }
}

export default SingleArticle;
