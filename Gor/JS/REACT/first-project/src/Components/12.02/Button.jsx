import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	static propTypes = {
		onchange: PropTypes.func,
		onclick: PropTypes.func,
		startDate: PropTypes.func,
		endDate: PropTypes.func
	};
	render() {
		const {
			onchange,
			onclick,
			startDate,
			endDate
			  } = this.props;
		return(
			<div>
				<input onChange={onchange}></input>
				<input type="date" onChange={startDate}></input>
				<input type="date" onChange={endDate}></input>
				<button onClick={onclick}>Add List</button>
			</div>
		);
	}
}

export {Button};