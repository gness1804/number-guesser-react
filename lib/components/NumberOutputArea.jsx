import React, {Component} from 'react';

class NumberOutputArea extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <p>Your last guess was...</p>
        <p>14</p>
        <p>Sorry, that guess is too low. Try again.</p>
      </div>
    );
  }
} //end of NumberOutputArea

module.exports = NumberOutputArea;
