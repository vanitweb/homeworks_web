import React, { component } from 'react';
class Input extends component {
	render() {
		const {value, changeText} = this.props;
		return (
		<input value = {value} onChange={changeText} />
		);
	}
}
export {Input};