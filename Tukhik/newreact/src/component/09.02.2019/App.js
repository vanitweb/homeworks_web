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
	@observable searchValue = '';

	poisk = (e) => {
		this.searchValue = e.target.value;
	}

	@computed get shearch() {
		return this.taskList.filter(i => {return i[0].match(this.searchValue)});
	}
	
	addNewTask = () => {
		this.taskList = [...this.taskList, [this.newTaskName, this.dateInterval]];
	}

	addTaskName = (e) => {
		this.newTaskName = e.target.value;
	}

	addStartDate = (e) => {
		this.newTaskStartDate = e.target.value;
	}

	addEndDate = (e) => {
		this.newTaskEndDate = e.target.value;
	}

	delateTask = (e) => {
		const item = e.target.value;
		this.taskList.splice(item, 1);
	}
	
		
	@computed
	get dateInterval() {
		return `${this.newTaskStartDate} - ${this.newTaskEndDate}`;
	}
		
  	render() {
    	return (
      		<Fragment>
      		<p>Search<Input  val = {this.searchValue} onchange = {this.poisk} placeholder='search'/></p>
        		<AddItem
					addNewTask={this.addNewTask}
					addTaskName={this.addTaskName}
					addStartDate={this.addStartDate}
					addEndDate={this.addEndDate}
					dateInterval={this.dateInterval}
				/>
        		<TaskList taskList={this.taskList} delateTask={this.delateTask} />
				
      		</Fragment>
    	);
  	}
}

export default App;