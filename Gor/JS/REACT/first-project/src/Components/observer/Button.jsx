import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	static propTypes = {
		onchange: PropTypes.func,
		onclick: PropTypes.func,
	};
	render() {
		const {onchange,
			   onclick
			  } = this.props;
		return(
			<div>
				<input onChange={onchange}></input>
				<button onClick={onclick}>Add List</button>
			</div>
		);
	}
}

export {Button};