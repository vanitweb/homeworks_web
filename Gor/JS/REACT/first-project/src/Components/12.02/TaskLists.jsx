import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskLists extends Component {
	static propTypes = {
		item: PropTypes.string
	};
	render() {
		const {item} = this.props;
		return(
			<h1>{item}</h1>
		);
	}
}

export {TaskLists};