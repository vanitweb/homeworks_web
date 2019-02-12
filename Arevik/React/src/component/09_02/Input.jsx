import React, {Component, Fragment} from 'react';

class Input extends Component {
	render() {
		const{value, onChange}=this.props;
		return(
			<Fragment>
				<input value={value} onChange={onChange} type="text"/>
			</Fragment>
		);
	}
}
export {Input};