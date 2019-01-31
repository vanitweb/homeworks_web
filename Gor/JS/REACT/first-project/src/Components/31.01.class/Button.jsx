import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	static propTypes = {
		onchange: PropTypes.func,
		onclick: PropTypes.func,
	}
	
	render() {		
		const {onclick, onchange} = this.props;
		return(
			<div>
				<input onChange={onchange}></input>
				<button onClick={onclick}>addTask</button>
			</div>
		);
	}
}

export {Button};