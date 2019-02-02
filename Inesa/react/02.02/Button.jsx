import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
		<button onClick={this.props.onclickB}>{this.props.value}<button/>
	)
  }
}

export {Button};