import React, {Component} from 'react';

class UserCustomMinInput extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <input placeholder={this.props.placeholder} type="number" onChange={this.props.handleChange}/>
    );
  }
} //end of UserCustomMinInput

UserCustomMinInput.propTypes = {
  placeholder: React.PropTypes.string,
  handleChange: React.PropTypes.func
};

module.exports = UserCustomMinInput;
