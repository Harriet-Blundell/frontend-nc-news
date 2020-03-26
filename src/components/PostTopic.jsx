import React, { Component } from 'react';
import './TopicCard.css';

class PostedTopic extends Component {
  state = {
    slug: '',
    description: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { slug, description } = this.state;
    const { postedTopic } = this.props;
    postedTopic({ slug, description });
    this.setState({
      slug: '',
      description: ''
    });
  };

  handleChange = (text, key) => {
    this.setState({
      [key]: text
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="slug" className="addTopicTitle">
            Topic:
          </label>
          <input
            type="text"
            id="slug"
            placeholder="Enter a new topic"
            value={this.state.slug}
            onChange={event => this.handleChange(event.target.value, 'slug')}
          />{' '}
          <label htmlFor="description" className="addDescription">
            Description:
          </label>
          <input
            type="text"
            id="description"
            placeholder="Enter a description"
            value={this.state.description}
            onChange={event =>
              this.handleChange(event.target.value, 'description')
            }
          />
          <button className="submitTopicButton">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default PostedTopic;
