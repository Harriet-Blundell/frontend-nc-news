import React, { Component } from 'react';
import { fetchArticleById } from '../api';
import Voter from './Voter';
// import './ArticleCard.css';
import CommentsList from './CommentsList';
import ErrorPage from './ErrorPage';

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    fetchArticleById(this.props.id)
      .then(({ article }) => {
        this.setState({
          article: article,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          error: { msg: err.response.data.msg, status: err.response.status },
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
    const { article, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading article...</p>;
    }

    if (error) {
      return <ErrorPage error={error} />;
    }

    return (
      <div className="singleArticleById">
        <h2>Article:</h2>

        <h3>{article.title}</h3>
        <p className="singleArticle_generalinfo">General Information:</p>
        <p className="singleArticleBody">{article.body}</p>
        <Voter
          currentVote={article.votes}
          id={article.article_id}
          type={'articles'}
        />
        <p>Topic: {article.topic}</p>
        <p className="postedTag">Posted by: {article.author}</p>
        <p>Date: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>

        <CommentsList
          articleId={article.article_id}
          username={this.props.username}
        />
      </div>
    );
  }
}

export default SingleArticle;
