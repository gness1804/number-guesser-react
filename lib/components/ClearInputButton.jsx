import React, {Component} from 'react';

class ClearInputButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <button onClick={this.props.handleClick} disabled={this.props.isDisabled}>Clear Input</button>
    );
  }
} //end of ClearInputButton

ClearInputButton.propTypes = {
  handleClick: React.PropTypes.func,
  isDisabled: React.PropTypes.bool
}

module.exports = ClearInputButton;
