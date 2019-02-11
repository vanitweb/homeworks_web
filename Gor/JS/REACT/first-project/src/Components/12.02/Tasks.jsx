import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tasks extends Component {
	static propTypes = {
		item: PropTypes.string,
		complete: PropTypes.string,
		active: PropTypes.bool,
		clickcomolete: PropTypes.func
	};
	render() {
		const {
			item,
			complete,
			clickcomolete,
			close,
			day
			  } = this.props;
		return(
			<div>
				<h1>{item} {day}</h1>
				<button onClick={clickcomolete}>{complete}</button>
				<button onClick={close}>&times;</button>
			</div>
		);
	}
}

export {Tasks};