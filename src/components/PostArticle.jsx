import React, { Component } from 'react';
// import './PostArticle.css';

class PostedArticle extends Component {
  state = {
    author: this.props.username,
    title: '',
    topic: '',
    body: ''
  };

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
    if (prevProp.username !== this.props.username) {
      this.setState({
        author: this.props.username
      });
    }
  }

  render() {
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
          <p>
            <label htmlFor="topic">Topic:</label>
            <input
              type="text"
              id="topic"
              placeholder="Enter a topic"
              value={this.state.topic}
              onChange={event => this.handleChange(event.target.value, 'topic')}
            />
          </p>

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
