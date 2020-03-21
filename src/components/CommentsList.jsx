import React, { Component } from 'react';
import { fetchCommentsByArticleId } from '../api';
import CommentCard from './CommentCard';
import PostComment from './PostComment';
import { postCommentById } from '../api';

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

  postNewComment = newComment => {
    const { articleId } = this.props;

    postCommentById(articleId, newComment).then(({ comment }) => {
      this.setState(currentState => {
        return {
          comments: [comment, ...currentState.comments]
        };
      });
    });
  };

  render() {
    const { comments } = this.state;

    return (
      <div>
        <PostComment
          username={this.props.username}
          postNewComment={this.postNewComment}
        />
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
