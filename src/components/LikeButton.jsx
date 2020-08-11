import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      bgColor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
      bgColorIndex: 0,
    };
  }

  handleLikeButtonClick = () => {
    this.setState(() => {
      if (this.state.bgColorIndex === 5) {
        return {
          counter: this.state.counter + 1,
          bgColorIndex: 0,
        };
      } else {
        return {
          counter: this.state.counter + 1,
          bgColorIndex: this.state.bgColorIndex + 1,
        };
      }
    });
  };

  render() {
    return (
      <button
        style={{ backgroundColor: this.state.bgColor[this.state.bgColorIndex] }}
        onClick={this.handleLikeButtonClick}
      >
        {this.state.counter} Likes{' '}
      </button>
    );
  }
}

export default LikeButton;
