import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskLists extends Component {
	static propTypes = {
		item: PropTypes.string,
		day: PropTypes.string
	};
	render() {
		const {item, day} = this.props;
		return(
			<h1>{item} {day}</h1>
		);
	}
}

export {TaskLists};