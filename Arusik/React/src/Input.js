import React, { Component } from 'react';
class Input extends Component {
	render() {
		const {value, changeText} = this.props;
		return (
			<input value = {value} onChange={changeText}/>
		);
	}
}
export {Input};