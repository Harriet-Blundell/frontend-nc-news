import React from 'react';
import Voter from './Voter';

const CommentCard = props => {
  const { body, author, created_at, votes, comment_id } = props.comment;

  return (
    <div>
      <p>Comment: {body}</p>
      <p> Posted by: {author}</p>
      <p>Date: {created_at}</p>
      <Voter currentVote={votes} id={comment_id} type={'comments'} />
    </div>
  );
};

export default CommentCard;
