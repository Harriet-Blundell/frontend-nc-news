import React, { Component } from 'react'

class PostedComment extends Component {
  state = {
    body: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { body } = this.state
    const { username, postNewComment } = this.props
    postNewComment({ username, body })
    this.setState({
      body: '',
    })
  }

  handleChange = (text, key) => {
    this.setState({
      body: text,
    })
  }

  render() {
    return (
      <div className='commentsContainer'>
        <form onSubmit={this.handleSubmit} className='commentsForm'>
          <textarea
            className='commentTextArea'
            rows='7'
            cols='50'
            placeholder='Post a comment here...'
            onChange={(event) => {
              this.handleChange(event.target.value, 'body')
            }}
            value={this.state.body}
            required
          ></textarea>
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostedComment
