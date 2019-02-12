import React, {Component, Fragment} from 'react';

import {Task} from './Task.jsx';

class TaskList extends Component {
	render() {
		const{taskList, delateTask}=this.props;
		return (
			<Fragment>
				<Task taskList={taskList} delateTask={delateTask} />
			</Fragment>
		);	
  	}
}
export {TaskList};