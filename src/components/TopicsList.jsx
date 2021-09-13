import React, { Component } from "react";
import { fetchAllTopics } from "../api";
import TopicCard from "./TopicCard";
import "./TopicCard.css";
import { postTopic } from "../api";
import PostTopic from "./PostTopic";
import ErrorPage from "./ErrorPage";

class TopicsList extends Component {
  state = {
    topics: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    fetchAllTopics()
      .then(({ topics }) => {
        this.setState({
          topics: topics,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.response,
          isLoading: false,
        });
      });
  }

  postedTopic = (newTopic) => {
    postTopic(newTopic).then(({ topic }) => {
      this.setState((currentState) => {
        return {
          topics: [topic[0], ...currentState.topics],
        };
      });
    });
  };

  render() {
    const { topics, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading topics...</p>;
    }

    if (error) {
      return <ErrorPage error={error} />;
    }

    return (
      <div>
        {this.props.username === "guest" ? (
          <p className="addTopicMsg">
            If you want to add a new topic, please log in.
          </p>
        ) : (
          <PostTopic postedTopic={this.postedTopic} />
        )}
        <h2 className="topics_title">Topics</h2>
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
