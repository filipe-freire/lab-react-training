import React from 'react';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolling: false,
      counter: 1,
      imgSrc: `./img/dice3.png`,
    };
  }

  generateRandomNumber = (lower, upper) => {
    return Math.floor(Math.random() * (upper + 1 - lower)) + lower;
  };

  imageClick = () => {
    this.setState(() => {
      return {
        imgSrc: `./img/dice-empty.png`,
        rolling: true,
      };
    });
    if (!this.state.rolling) {
      setTimeout(() => {
        this.setState(() => {
          return {
            rolling: !this.state.rolling,
            imgSrc: `./img/dice${this.state.counter}.png`,
            counter: this.generateRandomNumber(1, 6),
          };
        });
      }, 1000);
    }
  };

  render() {
    return (
      <img
        src={this.state.imgSrc}
        alt="Dice"
        onClick={this.imageClick}
        style={{ width: '100px' }}
      ></img>
    );
  }
}

export default Dice;
