import React, { Component } from 'react';
import './PostArticle.css';

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
        <button onClick={this.handleClick} className="togglePost">
          {showToggle ? 'HIDE ARTICLE FORM' : 'CREATE A NEW ARTICLE'}
        </button>
        {showToggle && this.props.children}
      </div>
    );
  }
}

export default Toggler;
