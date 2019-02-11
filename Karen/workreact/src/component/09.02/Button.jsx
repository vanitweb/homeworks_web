import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.addTask}>AddTask</button>
      </>
    );
  }
}

export default Button;