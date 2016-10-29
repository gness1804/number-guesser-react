import React, {Component} from 'react';

class ClearInputButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <button onClick={this.props.handleClick}>Clear Input</button>
    );
  }
} //end of ClearInputButton

module.exports = ClearInputButton;
