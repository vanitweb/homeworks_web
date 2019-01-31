import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
	
	static = {
		name: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	}
	
	render(){
		const {onClick, onChange, name, value}= this.props;
		return (
		<div>
			<input value={value} onChange={onChange}/>
			<button onClick={onClick}>{name}</button>
		</div>
		)
	}
}
export {Button};