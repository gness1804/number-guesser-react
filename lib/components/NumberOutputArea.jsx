import React, {Component} from 'react';
import Input from './Input';
import SubmitGuessButton from './SubmitGuessButton';
import ClearInputButton from './ClearInputButton';
import ResetGameButton from './ResetGameButton';
import UserCustomMaxInput from './UserCustomMaxInput';
import UserCustomMinInput from './UserCustomMinInput';
import SubmitCustomMaxMin from './SubmitCustomMaxMin';

class NumberOutputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNumber: null,
      computerNumber: null,
      min: 0,
      max: 100,
      messageToUser: '',
      userMin: null,
      userMax: null,
      clearButtonDisabled: true,
      resetButtonDisabled: true
    };
  }

  addUserMax(e){
    let userMax = parseInt(e.target.value, 10);
    this.setState({userMax:userMax});
  }

  addUserMin(e){
    let userMin = parseInt(e.target.value, 10);
    this.setState({userMin:userMin});
  }

  clearGivenField(field){
    document.querySelector(field).value = '';
  } //end of clearInputField

  clearInputField(){
    this.clearGivenField('.input-field');
    this.disableButtons();
  }

  adjustMaxMinToUserInput(){
    if (this.state.userMin < this.state.userMax) {
      this.setMaxAndMinStatesToUserInput();
    }
    else {
      alert('Your chosen min must be less than your max.');
      this.clearGivenField('#user-min-input');
      this.clearGivenField('#user-max-input');
      return;
    }
  } //end of adjustMaxMinToUserInput

  compareNumbers(){
    if (this.state.computerNumber === null) {
      this.generateRandomNumber(this.clearInputField());
    }
    else {
      this.evaluateTheTwoNumbers();
    }
    // this.clearInputField();
  } //end of compareNumbers

  disableButtons(){
    this.setState({clearButtonDisabled:true});
    this.setState({resetButtonDisabled:true});
  }

  enableButtons(){
    this.setState({clearButtonDisabled:false});
    this.setState({resetButtonDisabled:false});
  }

  evaluateTheTwoNumbers(){
    let userNumber = this.state.userNumber;
    let computerNumber = this.state.computerNumber;
    if (userNumber > this.state.max) {
      this.tellUser("Your number is above the accepted range.");
      console.log("The computer chose: " + computerNumber);
    }
    else if (userNumber < this.state.min) {
      this.tellUser("Your number is below the accepted range.");
      console.log("The computer chose: " + computerNumber);
    }
    else if (userNumber < computerNumber) {
      this.tellUser("Sorry, your guess is too low. Please try again.");
      console.log("The computer chose: " + computerNumber);
    }
    else if (userNumber > computerNumber) {
      this.tellUser("Sorry, your guess is too high. Please try again.");
      console.log("The computer chose: " + computerNumber);
    }
    else if (userNumber === computerNumber) {
      alert('You win! Now get ready for a new challenge.');
      this.startNewGameAfterWin();
    }
  } //end of evaluateTheTwoNumbers

  tellUser(message){
    this.setState({messageToUser:message});
  }

  generateRandomNumber(){
    let min = this.state.min;
    let max = this.state.max;
    let newComputerNumber = this.randomize(min, max);
    this.setState({computerNumber: newComputerNumber}, ()=>{
      this.evaluateTheTwoNumbers();
    });
  }

  randomize(min, max){
    return Math.floor(Math.random() * (max - min) + min);
  }

  resetGameToInitialState(){
    this.clearNumbers();
    this.setState({min: 0});
    this.setState({max: 100});
    this.clearInputField();
  }

  clearNumbers(){
    this.setState({userNumber: null});
    this.setState({computerNumber: null});
    this.setState({messageToUser: ''});
  }

  setMaxAndMinStatesToUserInput(){
    this.setState({max:this.state.userMax}, ()=>{
      this.generateRandomNumber();
    });
    this.setState({min:this.state.userMin}, ()=>{
      this.generateRandomNumber();
    });
    this.clearInputField();
  }

  setUserNumberState(e){

    const items = {
      thereIsStuffInTheInputField: e.target.value.length > 0
    };

    let userNumber = parseInt(e.target.value, 10);

    if (items.thereIsStuffInTheInputField) {
      this.enableButtons();
    }

    if (isNaN(userNumber)) {
      alert('Please choose a valid number.');
      this.clearInputField();
      return;
    }
    else {
      this.setState({userNumber: userNumber});
    }

  } //end of setUserNumberState

  startNewGameAfterWin(){
    this.clearNumbers();
    this.setState({min: this.state.min - 10});
    this.setState({max: this.state.max + 10});
    this.clearInputField();
  }

  render () {
    return (
      <div>
        <p>Min: {this.state.min} Max: {this.state.max}</p>
        <p className="last-guess">Your last guess was...</p>
        <p id="number-output-field">{this.state.userNumber}</p>
        <p>{this.state.messageToUser}</p>
          <Input
            className="input-field"
            ref="inputField"
            value={this.state.userNumber}
            handleChange={(e)=>{this.setUserNumberState(e)}}
            placeholder="Your best guess..."
            />
          <SubmitGuessButton
            className="submit-guess-button"
            handleClick={()=>this.compareNumbers()}
            />
          <ClearInputButton handleClick={()=>this.clearInputField()} isDisabled={this.state.clearButtonDisabled}/>
          <ResetGameButton handleClick={()=>this.resetGameToInitialState()}
            isDisabled={this.state.resetButtonDisabled}/>
          <UserCustomMinInput
            id="user-min-input"
            placeholder="Enter your new minimum."
            ref="UserCustomMinInput"
            handleChange={(e)=>{this.addUserMin(e)}}
            />
          <UserCustomMaxInput
            id="user-max-input"
            placeholder="Enter your new maximum."
            ref="UserCustomMaxInput"
            handleChange={(e)=>this.addUserMax(e)}
            />
          <SubmitCustomMaxMin handleClick={()=>this.adjustMaxMinToUserInput()}/>
      </div>
    );
  }
} //end of NumberOutputArea

NumberOutputArea.propTypes = {
  max: React.PropTypes.number,
  messageToUser: React.PropTypes.string,
  min: React.PropTypes.number,
  userNumber: React.PropTypes.number,
}

module.exports = NumberOutputArea;
