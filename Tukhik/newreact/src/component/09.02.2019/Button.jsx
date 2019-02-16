import React, {Component, Fragment} from 'react';

class Button extends Component {
	render() {
		return(
			<Fragment>
				<button onClick={this.props.addNewTask}>Add</button>
			</Fragment>
		);
	}
}
export {Button};