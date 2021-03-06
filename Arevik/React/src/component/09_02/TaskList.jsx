import React, {Component, Fragment} from 'react';
import {Task} from './Task.jsx';


class TaskList extends Component {
	render() {
		const{taskList, delateTask, filterTask, searchvalue}=this.props;
		return (
			<Fragment>
				<Task
				taskList={taskList}
				delateTask={delateTask}
				filterTask={filterTask}
				searchvalue={searchvalue}
			/>
			</Fragment>
		);	
  	}
}
export {TaskList};