import React, { Component } from 'react';
import PropTypes from 'prom-types';


class Button extends React.Component {
	static Proptypes = {
		content: PropTypes.srting.isRequired,
		onButtonClick: PropTypes.func.isRequired
	}
	
	render(){
		const {content, onButtonClick} = this.props;
		return (
		<button onclick={onButtonClick}>{content}</button>
		)
	}
}
export {Button}