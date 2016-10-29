import React, {Component} from 'react';

class UserCustomMinInput extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <input placeholder={this.props.placeholder}/>
    );
  }
} //end of UserCustomMinInput

UserCustomMinInput.propTypes = {
  placeholder: React.PropTypes.string,
}

module.exports = UserCustomMinInput;
