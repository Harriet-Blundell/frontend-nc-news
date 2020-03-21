import React, { Component } from 'react';
import { fetchCommentsByArticleId } from '../api';
import CommentCard from './CommentCard';

class CommentsList extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    const { articleId } = this.props;
    fetchCommentsByArticleId(articleId).then(({ comments }) => {
      this.setState({
        comments: comments,
        isLoading: false
      });
    });
  }

  render() {
    const { comments } = this.state;

    return (
      <div>
        <h4>Comments:</h4>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </div>
    );
  }
}

export default CommentsList;
