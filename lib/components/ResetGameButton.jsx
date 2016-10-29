import React, {Component} from 'react';

class ResetGameButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <button onClick={this.props.handleClick}>Reset Game</button>
    );
  }
} //end of ResetGameButton

module.exports = ResetGameButton;
