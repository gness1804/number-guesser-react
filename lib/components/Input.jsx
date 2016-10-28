import React, {Component} from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <input onChange={()=>this.props.handleChange()}/>
      </div>
    );
  }
} //end of Input

module.exports = Input;
