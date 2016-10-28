import React, {Component} from 'react';
import NumberOutputArea from './NumberOutputArea';
import Input from './Input';
import SubmitGuessButton from './SubmitGuessButton';
import ClearInputButton from './ClearInputButton';
import ResetGameButton from './ResetGameButton';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNumber: null
    };

  } //end of constructor

  setUserNumberState(){
    
  }

  render () {
    return (
      <div>
        <h1>Number Guesser in React</h1>
        <div className="number-output-area">
          <NumberOutputArea/>
        </div>
        <Input value={this.state.userNumber} handleChange={this.setUserNumberState.bind(this)}/>
        <SubmitGuessButton/>
        <ClearInputButton/>
        <ResetGameButton/>

      </div>
    );
  }
} //end of Application

module.exports = Application;
