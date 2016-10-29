import React, {Component} from 'react';

class ResetGameButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <button onClick={this.props.handleClick} disabled={this.props.isDisabled}>Reset Game</button>
    );
  }
} //end of ResetGameButton

ResetGameButton.propTypes = {
  handleClick: React.PropTypes.func,
  isDisabled: React.PropTypes.bool
}

module.exports = ResetGameButton;
