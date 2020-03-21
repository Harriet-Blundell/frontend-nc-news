import React, { Component } from 'react';
import { fetchAllTopics } from '../api';
import TopicCard from './TopicCard';

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

    console.log(topics, 'in topic list');

    if (isLoading) {
      return <p>Loading topics...</p>;
    }
    return (
      <div>
        <h2>Topics:</h2>
        {topics.map((topic, index) => {
          return (
            <li key={index}>
              <TopicCard topic={topic} />
            </li>
          );
        })}
      </div>
    );
  }
}

export default TopicsList;
