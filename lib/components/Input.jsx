import React, {Component} from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <input onChange={(e)=>this.props.handleChange(e)}/>
      </div>
    );
  }
} //end of Input

module.exports = Input;
