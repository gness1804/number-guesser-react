import React, {Component} from 'react';
import NumberOutputArea from './NumberOutputArea';

class Application extends React.Component {
  constructor(props) {
    super(props);

  } //end of constructor

  render () {
    return (
      <div id="container-main">
        <h1>Number Guesser in React</h1>
        <div className="number-output-area">
          <NumberOutputArea/>
        </div>
      </div>
    );
  }
} //end of Application

module.exports = Application;
