import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    return (
      <>
        <input onChange={this.props.onchange} value={this.props.val} ></input>
      </>
    );
  }
}

export default Input;