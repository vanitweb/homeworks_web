import React, { Component } from 'react';
class Button extends Component {
	render() {
    	const {del} = this.props;
      	return (
      		<button onClick={del}>Delete</button>
      	);
    }
}

export {Button};