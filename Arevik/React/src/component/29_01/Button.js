import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
	
	static = {
		name: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	}
	
	render(){
		const {onClick, name}= this.props;
		return (
			<button onClick={onClick}>{name}</button>
		)
	}
}
export {Button};