import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
	
	
	
	render(){
		const {value1}=this.props;
		return (
			<div>{value1}</div>
				
		)
	}
}
export {TextArea};