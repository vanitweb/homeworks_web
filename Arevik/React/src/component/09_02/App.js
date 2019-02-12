import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {observable, computed} from 'mobx';
import {AddItem} from './AddItem.jsx';
import {TaskList} from './TaskList.jsx';
import {Input} from './Input.jsx';


@observer
class App extends Component {

  	@observable taskList = [];
	@observable newTaskName = '';
	@observable newTaskStartDate = '';
	@observable newTaskEndDate = '';
	
	addNewTask = () => {
		this.taskList = [...this.taskList, [this.newTaskName, this.dateInterval]];
	}

	addTaskName = (event) => {
		this.newTaskName = event.target.value;
	}

	addStartDate = (event) => {
		this.newTaskStartDate = event.target.value;
	}

	addEndDate = (event) => {
		this.newTaskEndDate = event.target.value;
	}

	delateTask = (event) => {
		const item = event.target.value;
		this.taskList.splice(item, 1);
	}
	
		
	@computed
	get dateInterval() {
		return `${this.newTaskStartDate} -- ${this.newTaskEndDate}`;
	}
		
  	render() {
    	return (
      		<Fragment>
        		<AddItem
					addNewTask={this.addNewTask}
					addTaskName={this.addTaskName}
					addStartDate={this.addStartDate}
					addEndDate={this.addEndDate}
					dateInterval={this.dateInterval}
				/>
        		<TaskList taskList={this.taskList} delateTask={this.delateTask} />
				<Input value='Filter' />
      		</Fragment>
    	);
  	}
}

App.propTypes = {
  taskList: PropTypes.array.isRequired,
  newTaskName: PropTypes.string.isRequired,
  newTaskStartDate: PropTypes.number.isRequired,
  newTaskEndDate: PropTypes.number.isRequired
}

export default App;