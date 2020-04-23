import React, { Component } from 'react'
import './Voter.css'
import { patchVote } from '../api'

class Vote extends Component {
  state = {
    voteModifier: 0,
  }

  handleUpVote = (id, type) => {
    patchVote(id, 1, type).then(() => {
      this.setState((prevState) => {
        return {
          voteModifier: prevState.voteModifier + 1,
        }
      })
    })
  }

  handleDownVote = (id, type) => {
    patchVote(id, -1, type).then(() => {
      this.setState((prevState) => {
        return {
          voteModifier: prevState.voteModifier - 1,
        }
      })
    })
  }

  render() {
    const { id, currentVote, type } = this.props
    const { voteModifier } = this.state
    return (
      <div className='voteContainer'>
        <button
          className='upVoteBtn'
          disabled={this.state.voteModifier === 1}
          onClick={() => {
            this.handleUpVote(id, type)
          }}
        >
          <img
            src='https://cdn2.iconfinder.com/data/icons/drf/PNG/up_alt.png'
            alt='up vote button'
            className='upVoteImg'
          />
        </button>{' '}
        {currentVote + voteModifier}{' '}
        <button
          className='downVoteBtn'
          disabled={this.state.voteModifier === -1}
          onClick={() => {
            this.handleDownVote(id, type)
          }}
        >
          <img
            src='https://cdn2.iconfinder.com/data/icons/32pxmania/misc_28.png'
            alt='down vote button'
            className='downVoteImg'
          />
        </button>
      </div>
    )
  }
}

export default Vote
