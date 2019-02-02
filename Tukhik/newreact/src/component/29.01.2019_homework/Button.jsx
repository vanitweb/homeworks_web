import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	
	static PropTypes = {
		name: PropTypes.string.isRequired,
		nameData: PropTypes.number.isRequired,
		onClick: PropTypes.func.isRequired
	}
	
	render(){
		const {name, nameData, onClick}= this.props;
		return (
			<button nameData={nameData} onClick={onClick}>{name}</button>
		)
	}
}
export {Button};