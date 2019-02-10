import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	
	static = {
		name: PropTypes.string.isRequired,
		data_name: PropTypes.number.isRequired,
		onClick: PropTypes.func.isRequired
	}
	
	render(){
		const {name, data_name, onClick}= this.props;
		return (
			<button data_name={data_name} onClick={onClick}>{name}</button>
		)
	}
}
export {Button};