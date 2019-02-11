import React, { Component } from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';
import AddItem from './AddItem.jsx';
import TaskList from './TaskList.jsx';
import {observer} from 'mobx-react';
import {observable, computed, action} from 'mobx';
import PropTypes from 'prop-types';

@observer
class App extends Component {
  	@observable searchValue = '';
	@observable taskList = [];
	@observable newTaskName = '';
	@observable newTaskStartDate = '';
	@observable newTaskEndDate = '';

	poisk = (e) => {
		this.searchValue = e.target.value;
	}

	@computed get shearch() {
		return this.taskList.filter(i => {return i[0].match(this.searchValue)});
	}

	addTask = () => {
		this.taskList = [...this.taskList, [this.newTaskName, this.newTaskStartDate, this.newTaskEndDate]];
	}

	add = (e) => {
		this.newTaskName = e.target.value;
	}

	addStart = (e) => {
		this.newTaskStartDate = e.target.value;
	}

	addEnd = (e) => {
		this.newTaskEndDate = e.target.value;
	}

	jnjel = (e) => {
		const x = e.target.value;
		this.taskList.splice(x, 1);
	}

  	render() {
    	return (
      		<>
        		<AddItem  addTask = {this.addTask} add = {this.add} addStart = {this.addStart} addEnd = {this.addEnd} />
        		<Input  val = {this.searchValue} onchange = {this.poisk}/>
        		<TaskList taskList = {this.shearch} jnjel = {this.jnjel} />
      		</>
    	);
  	}
}

export default App;