import React from 'react';

class FindText extends React.Component {

	render () {
    	const {value, onFound} = this.props;
		return (
		 <div>
			<input value={value} onFound={this.props.onFound}/>
			
		 </div>
		)
	}
}

export {FindText};