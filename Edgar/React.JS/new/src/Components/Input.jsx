import React, { Component } from 'react';

class Input extends Component {
	
  render() {
	  const {value, onChange, clearInput} = this.props;
    return (
		<div>
			<input value={value} onChange={onChange} />
			<button onClick={clearInput}>Click me</button>
		</div>
    );
  }
}

export {Input};