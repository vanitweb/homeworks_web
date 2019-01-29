import React, { Component } from 'react';

class Input extends Component {
	render () {
    	const {value, onChange, clearInput} = this.props;
		console.log(this.props);
		return (
		 <div>
			<input value={value} onChange={onChange}/>
			<button onClick={clearInput}>Clear</button>
		 </div>
		);
	}
}

export {Input};


