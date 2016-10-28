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
      userNumber: null,
      computerNumber: null,
      min: 0,
      max: 100
    };

  } //end of constructor

  componentDidMount(){

  } //end of componentDidMount

  compareNumbers(){
    if (this.state.computerNumber === null) {
      this.generateRandomNumber();
    }
    let userNumber = this.state.userNumber;
    let computerNumber = this.state.computerNumber;
    this.evaluateTheTwoNumbers(userNumber, computerNumber);
  }

  evaluateTheTwoNumbers(userNumber, computerNumber){
    if (userNumber > this.state.max) {
      console.log("Your number is above the accepted range.");
    }
    else if (userNumber < computerNumber) {
      console.log("Sorry, your guess is too low. Please try again.");
      console.log("The computer chose: " + computerNumber);
    }
    else if (userNumber > computerNumber) {
      console.log("Sorry, your guess is too high. Please try again.");
      console.log("The computer chose: " + computerNumber);
    }
  } //end of evaluateTheTwoNumbers

  generateRandomNumber(){
    let min = this.state.min;
    let max = this.state.max;
    let newComputerNumber = Math.floor(Math.random() * (max - min) + min);
    this.setState({computerNumber: newComputerNumber});
  }

  setUserNumberState(e){
    let userNumber = parseInt(e.target.value);
    if (isNaN(userNumber)) {
      alert('Please choose a valid number.');
      e.target.value = ''; //TODO: break out into own function
      return;
    }
    else {
      this.setState({userNumber: userNumber});
    }

  } //end of setUserNumberState

  render () {
    return (
      <div>
        <h1>Number Guesser in React</h1>
        <div className="number-output-area">
          <NumberOutputArea max={this.state.max} min={this.state.min}/>
        </div>
        <Input ref="inputField" value={this.state.userNumber} handleChange={this.setUserNumberState.bind(this)}/>
        <SubmitGuessButton handleClick={()=>this.compareNumbers()}/>
        <ClearInputButton/>
        <ResetGameButton/>

      </div>
    );
  }
} //end of Application

module.exports = Application;
