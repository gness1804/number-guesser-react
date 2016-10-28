import React, {Component} from 'react';
import NumberOutputArea from './NumberOutputArea';
import Input from './Input';
import SubmitGuessButton from './SubmitGuessButton';
import ClearInputButton from './ClearInputButton';
import ResetGameButton from './ResetGameButton';

class Application extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <h1>Number Guesser in React</h1>
        <div className="number-output-area">
          <NumberOutputArea/>
        </div>
        <Input />
        <SubmitGuessButton/>
        <ClearInputButton/>
        <ResetGameButton/>
        
      </div>
    );
  }
} //end of Application

module.exports = Application;
