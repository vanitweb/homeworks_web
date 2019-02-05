import React, { Component } from 'react';

class Content extends Component {
	render() {
		const {timer} = this.props;
		return(
			<h1>{timer}</h1>
		);
	}
}

export {Content};