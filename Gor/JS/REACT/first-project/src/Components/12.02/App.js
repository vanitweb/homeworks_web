import React, { Component } from 'react';
import {Button} from './Button';
import {Tasks} from './Tasks';
import {Search} from './Search';
import {TaskLists} from './TaskLists';
import {observable, computed} from 'mobx';
import {observer}  from 'mobx-react';
@observer
class App extends Component {
	state = {
		list: []
	}
	@observable currentTask = "";
	@observable taskStartDate = "";
	@observable taskEndDate = "";
	@observable currentSearch = "";
	close = (event) => {
		const arr = event.target.parentNode.parentNode.childNodes;
		const element = event.target.parentNode;
		let indexOfElement;
		for(let i = 1; i < arr.length; i++) {
			if(arr[i] === element) {
				indexOfElement = i;
				break;
			}
		}
		let temp = [...this.state.list];
		temp.splice(indexOfElement - 1, 1);
		this.setState({list: temp});
	}
	clickComolete = (event) => {
		const arr = event.target.parentNode.parentNode.childNodes;
		const element = event.target.parentNode;
		let indexOfElement;
		for(let i = 1; i < arr.length; i++) {
			if(arr[i] === element) {
				indexOfElement = i;
				break;
			}
		}
		let temp = [...this.state.list];
		temp[indexOfElement - 1].complete = "Done";
		this.setState({list: temp});
	}
	startDate = (event) => {
		this.taskStartDate = event.target.value.toString();
	}
	endDate = (event) => {
		this.taskEndDate = event.target.value.toString();
	}
	@computed get addDay() {
		return `Օր՝ ${this.taskStartDate} - ${this.taskEndDate}`;
	}
	onchange = (event) => {
		this.currentTask = event.target.value;
	}
	onchangeSearch = (event) => {
		this.currentSearch = event.target.value;
	}
	onclick = () => {
		let arr = [...this.state.list];
		arr.push({key: new Date(), value:this.currentTask, complete: 'Complete', date: this.taskDay });
		this.setState({list: arr});
	}
	@computed get taskList() {
		return this.state.list.filter(item => (item.value === this.currentSearch));
	}
	render() {
		const {list} = this.state;
    	return (
		  <div className="App">
			<Button onchange={this.onchange} onclick={this.onclick} startDate={this.startDate} endDate={this.endDate} />
			{list.map(item => (
            		<Tasks key={item.key} item={item.value} complete={item.complete} day={this.addDay} clickcomolete={this.clickComolete} close={this.close} />
          	))}
			<Search onchange={this.onchangeSearch} />
			{this.taskList.map(item => (
            		<TaskLists key={new Date()} item={item.value} />
          	))}
		  </div>
		);
  	}
}

export default App;