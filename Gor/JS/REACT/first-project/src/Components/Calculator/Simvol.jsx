import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Simvol extends Component {
	static propTypes = {
		value: PropTypes.string.isRequired,
		grel: PropTypes.func.isRequired
	};
	render() {
		const {value, grel} = this.props;
		return(
			<button value={value} onClick={grel} className="btn btn-success">{value}</button>
		);
	}
}

export {Simvol};