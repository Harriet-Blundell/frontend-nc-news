import React from 'react';

const TopicCard = props => {
  const { slug, description } = props.topic;
  return (
    <div>
      <h3>{slug}</h3>
      <p>Description: {description}</p>
    </div>
  );
};

export default TopicCard;
