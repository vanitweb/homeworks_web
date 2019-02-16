import React, {Component, Fragment} from 'react';
import {Task} from './Task.jsx';


class TaskList extends Component {
	render() {
		return (
			<Fragment>
				<Task taskList={this.props.taskList} delateTask={this.props.delateTask} />
			</Fragment>
		);	
  	}
}
export {TaskList};