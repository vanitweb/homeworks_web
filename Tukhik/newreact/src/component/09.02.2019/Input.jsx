import React, {Component, Fragment} from 'react';

class Input extends Component {
	render() {
		return(
			<Fragment>
				<input value={this.props.value} onChange={this.props.onChange} type="text"/>
			</Fragment>
		);
	}
}
export {Input};