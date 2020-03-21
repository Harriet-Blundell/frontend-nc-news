import React, { Component } from 'react';
import { fetchAllTopics } from '../api';
import TopicCard from './TopicCard';
import './TopicCard.css';

class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    fetchAllTopics().then(({ topics }) => {
      this.setState({
        topics: topics,
        isLoading: false
      });
    });
  }

  render() {
    const { topics, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading topics...</p>;
    }
    return (
      <div>
        <h2 className="topics_title">Topics:</h2>
        {topics.map((topic, index) => {
          return (
            <li key={index} className="topic_list">
              <TopicCard topic={topic} />
            </li>
          );
        })}
      </div>
    );
  }
}

export default TopicsList;
