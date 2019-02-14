import React, {Component, Fragment} from 'react';
import {Input} from './Input.jsx';
import {Button} from './Button.jsx';
import {Date} from './Date.jsx';


class AddItem extends Component {
	render() {
		const{addTaskName, addStartDate, addEndDate, addNewTask, newTaskName, newTaskStartDate, newTaskEndDate}=this.props;
		return (
			<Fragment>
				<Input onChange={addTaskName} value={newTaskName} />
				<Date onChange={addStartDate} value={newTaskStartDate} />
				<Date onChange={addEndDate} value={newTaskEndDate}/>
				<Button addNewTask={addNewTask} />
			</Fragment>
    	);
	}
}
export {AddItem};