import React from 'react';
import './TopicCard.css';
import { Link } from '@reach/router';

const TopicCard = props => {
  const { slug, description } = props.topic;
  return (
    <div className="topic_card">
      <Link to={`/topics/${slug}`}>
        <h3>{slug}</h3>
      </Link>
      <p>
        Description: <br />
        {description}
      </p>
    </div>
  );
};

export default TopicCard;
