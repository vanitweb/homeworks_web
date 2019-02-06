import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired
	};
	render() {
		const {text} = this.props;
		return(
			<h1>{text}</h1>
		);
	}
}

export {Result};