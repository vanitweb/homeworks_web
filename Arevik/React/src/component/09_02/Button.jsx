import React, {Component, Fragment} from 'react';

class Button extends Component {
	render() {
		const{addNewTask}=this.props;
		return(
			<Fragment>
				<button onClick={addNewTask}><b>Ավելացնել առաջադրանք</b></button>
			</Fragment>
		);
	}
}
export {Button};