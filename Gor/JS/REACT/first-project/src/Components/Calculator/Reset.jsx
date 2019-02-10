import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reset extends Component {
	static propTypes = {
		reset: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired
	};
	render() {
		const {reset, value} = this.props;
		return(
			<button value={value} onClick={reset} className="btn btn-success">{value}</button>
		);
	}
}

export {Reset};