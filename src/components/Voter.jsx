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
