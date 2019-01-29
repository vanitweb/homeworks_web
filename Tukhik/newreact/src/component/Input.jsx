import React from 'react';

class Input extends React.Component {

	render () {
    	const {clearInput} = this.props;
		return (
		 <div>
			<button onClick={clearInput}>ggg</button>
			<button onClick={clearInput}>Click</button>
			<button onClick={clearInput}>me</button>
		 </div>
		)
	}
}

export {Input};
