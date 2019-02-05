import React from 'react';

class FindText extends React.Component {

	render () {
    	const {value2, onFound} = this.props;
		return (
		 <div>
			<input value={value2} onChange={onFound}/>
			
		 </div>
		)
	}
}

export {FindText};