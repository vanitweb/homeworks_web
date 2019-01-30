import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	static propTypes = {
		onclick: PropTypes.func,
		name: PropTypes.string
	};
	render() {
		const {onclick, name} = this.props;
		return(
			<button value={name} onClick={onclick}>{name}</button>
		);
	}
}

export {Button};