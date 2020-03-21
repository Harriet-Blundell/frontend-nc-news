import React from 'react';

const CommentCard = props => {
  const { body, author, created_at, votes } = props.comment;

  return (
    <div>
      <p>Comment: {body}</p>
      <p> Posted by: {author}</p>
      <p>Date: {created_at}</p>
      <p>Votes: {votes}</p>
    </div>
  );
};

export default CommentCard;
