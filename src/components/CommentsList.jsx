import React, { Component } from 'react';
import { fetchCommentsByArticleId } from '../api';
import CommentCard from './CommentCard';
import PostComment from './PostComment';
import './CommentList.css';
import { postCommentById } from '../api';
import { deleteCommentById } from '../api';

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true
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

  deleteComment = commentId => {
    deleteCommentById(commentId).then(() => {
      this.setState(prevState => {
        const filteredComments = prevState.comments.filter(comment => {
          return comment.comment_id !== commentId;
        });
        return {
          comments: filteredComments
        };
      });
    });
  };

  render() {
    const { comments, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading comments...</p>;
    }

    return (
      <div>
        {this.props.username !== 'guest' ? (
          <PostComment
            username={this.props.username}
            postNewComment={this.postNewComment}
          />
        ) : (
          <p className="postCommentMsg">
            If you want to post a comment, please log in.
          </p>
        )}

        <h4>Comments:</h4>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                comment={comment}
                deleteComment={this.deleteComment}
                username={this.props.username}
              />
            </li>
          );
        })}
      </div>
    );
  }
}

export default CommentsList;
