import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
	static propTypes = {
		btn: PropTypes.string
	};
	render() {
		const {btn} = this.props;
		let element;
		if(btn === 'Button1') {
			element = <p>Presed a button 'Button1'</p>;
		} else if(btn === 'Button2') {
			element = <p>Presed a button 'Button2'</p>;
		} else {
			element = <p>Presed a button 'Button3'</p>;
		}
		return(
			<div>
				{element}
			</div>
		);
	}
}

export {Content};