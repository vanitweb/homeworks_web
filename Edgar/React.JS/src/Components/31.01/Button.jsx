import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	static propTypes = {
		setValue: PropTypes.func,
		addElem: PropTypes.func,
	}
	
	render() {		
		const {addElem, setValue} = this.props;
		return(
			<div>
				<input onChange={setValue}></input>
				<button onClick={addElem}>Add</button>
			</div>
		);
	}
}

export {Button};