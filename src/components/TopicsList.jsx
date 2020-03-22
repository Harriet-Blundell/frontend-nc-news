import React, { Component } from 'react';
import { fetchAllTopics } from '../api';
import TopicCard from './TopicCard';
import './TopicCard.css';
import { postTopic } from '../api';
import PostTopic from './PostTopic';

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

  postedTopic = newTopic => {
    postTopic(newTopic).then(({ topic }) => {
      this.setState(currentState => {
        return {
          topics: [topic, ...currentState.topics]
        };
      });
    });
  };

  render() {
    const { topics, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading topics...</p>;
    }
    return (
      <div>
        {this.props.username !== 'guest' && (
          <PostTopic postedTopic={this.postedTopic} />
        )}
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
