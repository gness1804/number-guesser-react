import React, {Component} from 'react';

class Application extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <h1>Number Guesser in React</h1>
        <Input />
        <SubmitGuessButton/>
        <ClearInputButton/>
        <ResetGameButton/>
      </div>
    );
  }
} //end of Application

module.exports = Application;
