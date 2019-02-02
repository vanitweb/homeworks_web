import React from 'react';

class Input extends React.Component {

	render () {
    	const {clearInput} = this.props;
		return (
		 <div>
	<button Click= {onChangeValue}>{this.props.value1} </button>
			<button onClick={onChangeValue}>Click</button>
			<button onClick={onChangeValue}>me</button>
		 </div>
		)
	}
}

export {Input};
