import React, {Component} from 'react';

class NumberOutputArea extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <p>Min: {this.props.min} Max: {this.props.max}</p>
        <p>Your last guess was...</p>
        <p id="number-output-field"></p>
        <p></p>
      </div>
    );
  }
} //end of NumberOutputArea

module.exports = NumberOutputArea;
