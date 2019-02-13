import React, {Component, Fragment} from 'react';

class Date extends Component {
	render() {
		return(
			<Fragment>
				<input value={this.props.value} onChange={this.props.onChange} type="date"/>
			</Fragment>
		);
	}
}
export {Date};