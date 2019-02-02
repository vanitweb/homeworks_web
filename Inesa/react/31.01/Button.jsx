import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
		<input type="button" value={this.props.value} onClick={this.props.onAChange} />
	)
  }
}

export {Button};


