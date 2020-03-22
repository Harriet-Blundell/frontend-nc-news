import React, { Component } from 'react';

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
          <label htmlFor="slug">Topic:</label>
          <input
            type="text"
            id="slug"
            placeholder="Enter a new topic"
            value={this.state.slug}
            onChange={event => this.handleChange(event.target.value, 'slug')}
          />{' '}
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Enter a description"
            value={this.state.description}
            onChange={event =>
              this.handleChange(event.target.value, 'description')
            }
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostedTopic;

/*

1. make an api request (post) to post a new topic - it takes the URL and a body
2. Import the api request into the topic list component
3. Create a function that takes takes as it's argument a variable (request body)
   and wraps the api request inside of it
4. setState - add the new topic alongside the other topics to the array of topics

5. In post topic component, create a handle submit that when clicked,
it invokes the function with what has been typed in the slug and description boxes

6. In the render for post topic, create a form and have an input - TWO

7. handleChange = keep track of what the user is typing
8. can only post topics if they are logged in - pass username down through props
 if (username) then show the boxes for posting a topic?

*/
