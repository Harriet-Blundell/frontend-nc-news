import React, { Component } from 'react';
import { fetchAllTopics } from '../api';
import './PostArticle.css';

class PostedArticle extends Component {
  state = {
    author: this.props.username,
    title: '',
    topics: [],
    topic: '',
    body: ''
  };

  componentDidMount() {
    fetchAllTopics().then(({ topics }) => {
      this.setState({
        topics: topics,
        isLoading: false
      });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { author, title, topic, body } = this.state;
    const { postNewArticle } = this.props;
    postNewArticle({ author, title, topic, body });
    this.setState({
      title: '',
      body: ''
    });
  };

  handleChange = (text, key) => {
    this.setState({
      [key]: text
    });
  };

  componentDidUpdate(prevProp, prevState) {
    if (
      prevProp.username !== this.props.username ||
      prevState.topics !== this.state.topics
    ) {
      this.setState({
        author: this.props.username,
        topic: this.state.topic
      });
    }
  }

  render() {
    const { topics } = this.state;
    return (
      <div className="postTopicContainer">
        <form onSubmit={this.handleSubmit} className="formContainer">
          <div className="titleAndTopicContainer">
            <p>
              <label htmlFor="title" className="newArticleTitle">
                Title:
              </label>
              <input
                className="titleBox"
                type="text"
                id="title"
                placeholder="Enter a title"
                value={this.state.title}
                onChange={event =>
                  this.handleChange(event.target.value, 'title')
                }
                required
              />
            </p>
            <p>
              <label htmlFor="topics" className="newTopic">
                Topic:
              </label>
              <select
                className="topicSelect"
                onChange={event =>
                  this.handleChange(event.target.value, 'topic')
                }
              >
                <option selected disabled>
                  Choose
                </option>
                {topics.map((topic, index) => {
                  return <option key={index}>{topic.slug}</option>;
                })}
              </select>
            </p>
          </div>
          <br />
          <label htmlFor="body" className="newDescription">
            Description:
          </label>
          <br />
          <textarea
            rows="7"
            cols="50"
            placeholder="Enter description here"
            onChange={event => {
              this.handleChange(event.target.value, 'body');
            }}
            value={this.state.body}
            required
          ></textarea>
          <br />
          <button className="articleSubmit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default PostedArticle;
