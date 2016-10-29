import React, {Component} from 'react';

class SubmitGuessButton extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <button className="submit-guess-button" onClick={this.props.handleClick}>Guess</button>
      </div>
    );
  }
} //end of SubmitGuessButton

module.exports = SubmitGuessButton;
