import React from 'react';
// import './TopicCard.css';
import { Link } from '@reach/router';

const TopicCard = props => {
  const { slug, description } = props.topic;
  return (
    <div className="topic_card">
      <Link to={`/topics/${slug}`} className="topicLink">
        <h3 className="topicName">{slug}</h3>
      </Link>
      <p className="descriptionTitle">
        Description: <br />
        {description}
      </p>
    </div>
  );
};

export default TopicCard;
