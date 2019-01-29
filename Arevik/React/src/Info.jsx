import React, { Component } from 'react';

class Info extends Component {
	render () {
		const {value}=this.props;
		return (
			<h1> {value}</h1>
		);
	}
}

export {Info};