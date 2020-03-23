import React, { Component } from 'react';

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
    const { postNewArticle, username } = this.props;
    postNewArticle({ author, title, topic, body });
    this.setState({
      author: username,
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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Enter a title"
            value={this.state.title}
            onChange={event => this.handleChange(event.target.value, 'title')}
            required
          />
          <label htmlFor="topic">
            Topic:
            <input
              type="text"
              id="topic"
              placeholder="Enter a topic"
              value={this.state.topic}
              onChange={event => this.handleChange(event.target.value, 'topic')}
            />
          </label>

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
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default PostedArticle;

/* 

1. Make an api patch request to the backend to add a new article
2. Create a post article component which is going to be the child of the articles list component
3. Import the API patch request in the articles list component, create a function called "postArticle" and place the api request inside of it

4. Bring in the post article component into articles list to pass the postArticle function down through props

5. In postArticle.jsx create a handleSubmit which takes the states author, title, topic, and body

Note: if you're logged in then it should post an article under your username?
*/
