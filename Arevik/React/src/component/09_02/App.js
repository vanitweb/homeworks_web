import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {computed} from 'mobx';
import {AddItem} from './AddItem.jsx';
import {TaskList} from './TaskList.jsx';
import {Input} from './Input.jsx';
import {AppStore} from './stores/AppStore'

@observer
class App extends Component {
	
	appStore = new AppStore();

  
	addNewTask = () => {
		this.appStore.taskList = [...this.appStore.taskList, [this.appStore.newTaskName, this.dateInterval]];
	}

	addTaskName = (event) => {
		this.appStore.newTaskName = event.target.value;
	}

	addStartDate = (event) => {
		this.appStore.newTaskStartDate = event.target.value;
	}

	addEndDate = (event) => {
		this.appStore.newTaskEndDate = event.target.value;
	}

	delateTask = (event) => {
		const item = event.target.value;
		this.appStore.taskList.splice(item, 1);
	}
	
		
	@computed
	get dateInterval() {
		return `${this.appStore.newTaskStartDate} -- ${this.appStore.newTaskEndDate}`;
	}
	
	@computed
	get filterTask() {
		return this.appStore.taskList.filter(o => 
			Object.keys(o).some(k => 
				o[k].toString().toLowerCase().indexOf(this.appStore.searchValue) !== -1)
		);
    }
	
	
	searchTask =(event) => {
		this.appStore.searchValue = event.target.value;
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
        		<TaskList
					taskList={this.appStore.taskList}
					delateTask={this.delateTask}
					filterTask={this.filterTask}
				/>
				<Input
					onchange={this.searchTask}
					searchvalue={this.appStore.searchvalue}
				/>
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