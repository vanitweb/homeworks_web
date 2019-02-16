import React, {Component, Fragment} from 'react';
import {Input} from './Input.jsx';
import {Button} from './Button.jsx';
import {Date} from './Date.jsx';


class AddItem extends Component {
	render() {
		return (
			<Fragment>
				<Input onChange={this.props.addTaskName} value={this.props.newTaskName} />
				<Date onChange={this.props.addStartDate} value={this.props.newTaskStartDate} />
				<Date onChange={this.props.addEndDate} value={this.props.newTaskEndDate}/>
				<Button addNewTask={this.props.addNewTask} />
      		</Fragment>
    	);
	}
}
export {AddItem};