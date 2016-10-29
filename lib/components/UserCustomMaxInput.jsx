import React, {Component} from 'react';

class UserCustomMaxInput extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <input placeholder={this.props.placeholder} type="number" onChange={this.props.handleChange}/>
    );
  }
} //end of UserCustomMaxInput

UserCustomMaxInput.propTypes = {
  placeholder: React.PropTypes.string,
  handleChange: React.PropTypes.func
};

module.exports = UserCustomMaxInput;
