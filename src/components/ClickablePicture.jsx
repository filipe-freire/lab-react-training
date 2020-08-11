import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  handleLikeButtonClick = () => {
    this.setState(() => {
      return {
        value: !this.state.value,
      };
    });
  };

  render() {
    return (
      <img
        src={this.state.value ? this.props.imgClicked : this.props.img}
        alt=""
        onClick={this.handleLikeButtonClick}
        style={{ width: '100px', display: 'block', margin: '0 auto' }}
      ></img>
    );
  }
}

export default ClickablePicture;
