import React, {Component} from 'react';
import NumberOutputArea from './NumberOutputArea';
import Input from './Input';
import SubmitGuessButton from './SubmitGuessButton';
import ClearInputButton from './ClearInputButton';
import ResetGameButton from './ResetGameButton';
import UserCustomMaxInput from './UserCustomMaxInput';
import UserCustomMinInput from './UserCustomMinInput';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNumber: null,
      computerNumber: null,
      min: 0,
      max: 100,
      messageToUser: ''
    };

  } //end of constructor

  componentDidMount(){

  } //end of componentDidMount

  compareNumbers(){
    if (this.state.computerNumber === null) {
      this.generateRandomNumber();
    }
    else {
      this.evaluateTheTwoNumbers();
    }
  } //end of compareNumbers

  evaluateTheTwoNumbers(){
    let userNumber = this.state.userNumber;
    let computerNumber = this.state.computerNumber;
    if (userNumber > this.state.max) {
      this.setState({messageToUser: "Your number is above the accepted range."});
    }
    else if (userNumber < this.state.min) {
      this.setState({messageToUser: "Your number is below the accepted range."});
    }
    else if (userNumber < computerNumber) {
      this.setState({messageToUser: "Sorry, your guess is too low. Please try again."});
      console.log("The computer chose: " + computerNumber);
    }
    else if (userNumber > computerNumber) {
      this.setState({messageToUser: "Sorry, your guess is too high. Please try again."});
      console.log("The computer chose: " + computerNumber);
    }
    else if (userNumber === computerNumber) {
      alert('You win! Now get ready for a new challenge.');
      this.startNewGameAfterWin();
    }
  } //end of evaluateTheTwoNumbers

  generateRandomNumber(){
    let min = this.state.min;
    let max = this.state.max;
    let newComputerNumber = Math.floor(Math.random() * (max - min) + min);
    this.setState({computerNumber: newComputerNumber}, ()=>{
      this.evaluateTheTwoNumbers();
    });
  }

  resetGameToInitialState(){
    this.setState({userNumber: null});
    this.setState({computerNumber: null});
    this.setState({messageToUser: ''});
    this.setState({min: 0});
    this.setState({max: 100});
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

  startNewGameAfterWin(){
    this.setState({userNumber: null});
    this.setState({computerNumber: null});
    this.setState({messageToUser: ''});
    this.setState({min: this.state.min - 10});
    this.setState({max: this.state.max + 10});
  }

  render () {
    return (
      <div>
        <h1>Number Guesser in React</h1>
        <div className="number-output-area">
          <NumberOutputArea
            max={this.state.max}
            min={this.state.min}
            userNumber={this.state.userNumber}
            messageToUser={this.state.messageToUser}
            />
        </div>
        <Input ref="inputField"
          value={this.state.userNumber}
          handleChange={this.setUserNumberState.bind(this)}
          placeholder="Your best guess..."
          />
        <SubmitGuessButton handleClick={()=>this.compareNumbers()}/>
        <ClearInputButton/>
        <ResetGameButton handleClick={()=>this.resetGameToInitialState()}
          />
        <UserCustomMaxInput placeholder="Enter your new maximum."/>
        <UserCustomMinInput placeholder="Enter your new minimum."/>
      </div>
    );
  }
} //end of Application

module.exports = Application;
