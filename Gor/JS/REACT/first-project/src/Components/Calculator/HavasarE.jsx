import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HavasarE extends Component {
	static propTypes = {
		havasar: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired
	};
	render() {
		const {havasar, value} = this.props;
		return(
			<button value={value} onClick={havasar} className="btn btn-success">{value}</button>
		);
	}
}

export {HavasarE};