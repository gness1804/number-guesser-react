import React, {Component} from 'react';

class SubmitCustomMaxMin extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <button onClick={this.props.handleClick}>Submit Custom Max/Min</button>
    );
  }
} //end of SubmitCustomMaxMin

SubmitCustomMaxMin.propTypes = {
  handleClick: React.PropTypes.func,
}

module.exports = SubmitCustomMaxMin;
