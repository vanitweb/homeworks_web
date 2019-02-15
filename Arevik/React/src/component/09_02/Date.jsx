import React, {Component, Fragment} from 'react';

class Date extends Component {
	render() {
		const{value, onChange}=this.props;
		return(
			<Fragment>
				<input value={value} onChange={onChange} type="date"/>
			</Fragment>
		);
	}
}
export {Date};