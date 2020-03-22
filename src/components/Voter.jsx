import React, { Component } from 'react';
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
          Up Vote
        </button>

        <button
          disabled={this.state.voteModifier === -1}
          onClick={() => {
            this.handleDownVote(id, type);
          }}
        >
          Down Vote
        </button>
      </div>
    );
  }
}

export default Vote;

// make votes go UP only ONCE
// make votes go DOWN only ONCE

// handle the votes in one function and have two set states in it

// pass in three arguments, id, type, and number
