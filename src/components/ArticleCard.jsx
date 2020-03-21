import React from 'react';
import { Link } from '@reach/router';
import './ArticleCard.css';

const ArticleCard = props => {
  const {
    title,
    article_id,
    topic,
    author,
    created_at,
    comment_count,
    votes
  } = props.article;
  return (
    <div className="articleCard">
      <Link to={`/articles/${article_id}`}>
        <h3 className="article_card_title">{title}</h3>
      </Link>

      <p>Topic: {topic}</p>
      <p>Posted by: {author}</p>
      <p>Date: {created_at}</p>
      <p>Votes: {votes}</p>
      <p>Comments: {comment_count}</p>
    </div>
  );
};

export default ArticleCard;
