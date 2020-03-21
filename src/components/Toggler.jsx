import React, { Component } from 'react';

class Toggler extends Component {
  state = {
    showToggle: false
  };

  handleClick = () => {
    this.setState(currentState => {
      return {
        showToggle: !currentState.showToggle
      };
    });
  };

  render() {
    const { showToggle } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>
          {showToggle ? 'Hide Comments' : 'Show Comments'}
        </button>
        {showToggle && this.props.children}
      </div>
    );
  }
}

export default Toggler;
