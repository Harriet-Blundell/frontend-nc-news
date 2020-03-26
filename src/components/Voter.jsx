import React, { Component } from 'react';
import './Voter.css';
import { patchVote } from '../api';

class Vote extends Component {
  state = {
    voteModifier: 0
  };

  handleUpVote = (id, type) => {
    patchVote(id, 1, type).then(() => {
      this.setState(prevState => {
        return {
          voteModifier: prevState.voteModifier + 1
        };
      });
    });
  };

  handleDownVote = (id, type) => {
    patchVote(id, -1, type).then(() => {
      this.setState(prevState => {
        return {
          voteModifier: prevState.voteModifier - 1
        };
      });
    });
  };

  render() {
    const { id, currentVote, type } = this.props;
    const { voteModifier } = this.state;
    return (
      <div>
        <p>Votes: {currentVote + voteModifier}</p>

        <button
          disabled={this.state.voteModifier === 1}
          onClick={() => {
            this.handleUpVote(id, type);
          }}
        >
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/softbank/145/upwards-black-arrow_2b06.png"
            alt="up vote button"
            className="upVoteButton"
          />
        </button>

        <button
          disabled={this.state.voteModifier === -1}
          onClick={() => {
            this.handleDownVote(id, type);
          }}
        >
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/softbank/145/upwards-black-arrow_2b06.png"
            alt="down vote button"
            className="downVoteButton"
          />
        </button>
      </div>
    );
  }
}

export default Vote;
