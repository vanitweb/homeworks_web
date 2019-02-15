import React, {Component, Fragment} from 'react';
import {observer} from 'mobx-react';


@observer
class Task extends Component {
	render() {
		return (
			<Fragment>
				<ul>
					{this.props.taskList.map((item) => {
						return(
						<li key={this.props.taskList.indexOf(item)}>
							<input value={item[0]} />
							<button>{item[1]}</button>
							<button	onClick={this.props.delateTask}>Delate</button>
						</li>
					)})}
				</ul>
			</Fragment>
		);	
	}
}
export {Task};