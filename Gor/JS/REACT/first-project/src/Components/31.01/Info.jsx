import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Info extends Component {
	static propTypes = {
		header: PropTypes.string
	};
	render() {
		const {header} = this.props;
		return(
			<h1>{header}</h1>
		);
	}
}

export {Info};