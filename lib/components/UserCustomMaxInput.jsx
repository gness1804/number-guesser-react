import React, {Component} from 'react';

class UserCustomMaxInput extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <input placeholder={this.props.placeholder}/>
    );
  }
} //end of UserCustomMaxInput

UserCustomMaxInput.propTypes = {
  placeholder: React.PropTypes.string,
}

module.exports = UserCustomMaxInput;
