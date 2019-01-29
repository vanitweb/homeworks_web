import React from 'react';

class Input extends React.Component {

	render () {
    	const {value, onChange, clearInput} = this.props;
		return (
		 <div>
			<input value={value} onChange={this.props.onChange}/>
			<button onClick={clearInput}>Click me</button>
		 </div>
		)
	}
}

export {Input};
