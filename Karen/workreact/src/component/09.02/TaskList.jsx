import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Task from './Task.jsx';

class TaskList extends Component {
	
	render() {
		return (
			<>
				<Task taskList = {this.props.taskList} jnjel = {this.props.jnjel}/>
			</>
		);	
  	}
}

export default TaskList;