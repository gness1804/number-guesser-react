import React, {Component} from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <input onChange={(e)=>this.props.handleChange(e)} type="number" placeholder={this.props.placeholder}/>
      </div>
    );
  }
} //end of Input

Input.propTypes = {
  handleChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
}

module.exports = Input;
