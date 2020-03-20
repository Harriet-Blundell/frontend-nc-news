import React from 'react';
import './ArticleCard.css';

const ArticleCard = props => {
  const {
    title,
    topic,
    author,
    created_at,
    comment_count,
    votes
  } = props.mostPopularArticles;
  return (
    <div className="articleCard">
      <h3 className="article_title">{title}</h3>
      <p className="article_name">Topic: {topic}</p>
      <p>Posted by: {author}</p>
      <p className="article_date">Date: {created_at}</p>
      <p>Votes: {votes}</p>
      <p className="article_comments">Comments: {comment_count}</p>
    </div>
  );
};

export default ArticleCard;
