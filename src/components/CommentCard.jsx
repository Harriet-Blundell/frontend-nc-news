import React from 'react';
import Voter from './Voter';
import Delete from './Delete';

const CommentCard = props => {
  const { body, author, created_at, votes, comment_id } = props.comment;
  const { username, deleteComment } = props;
  return (
    <div>
      <p>Comment: {body}</p>
      <p> Posted by: {author}</p>
      <p>Date: {created_at}</p>
      <Voter currentVote={votes} id={comment_id} type={'comments'} />
      {username === author && (
        <Delete deleteComment={deleteComment} commentId={comment_id} />
      )}
    </div>
  );
};

export default CommentCard;
