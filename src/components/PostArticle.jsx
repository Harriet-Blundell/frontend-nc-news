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
      topic: '',
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
      <div>
        <form onSubmit={this.handleSubmit} className="postArticleForm">
          <p>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Enter a title"
              value={this.state.title}
              onChange={event => this.handleChange(event.target.value, 'title')}
              required
            />
          </p>
          Topics:
          <label htmlFor="topics">
            <select
              onChange={event => this.handleChange(event.target.value, 'topic')}
            >
              <option selected disabled>
                Choose
              </option>
              {topics.map((topic, index) => {
                return <option key={index}>{topic.slug}</option>;
              })}
            </select>
          </label>
          <p className="description">
            <label htmlFor="body">Description:</label>
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
          </p>
          <p className="submit">
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default PostedArticle;
