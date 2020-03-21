import React from 'react';
import './TopicCard.css';

const TopicCard = props => {
  const { slug, description } = props.topic;
  return (
    <div className="topic_card">
      <h3>{slug}</h3>
      <p>
        Description: <br />
        {description}
      </p>
    </div>
  );
};

export default TopicCard;
