import React, { Component } from 'react';
import './App.css';
import {Task} from './Task';

class App extends Component {
	state = {
		value:'',
		myArray:[]
	}
	functionChenge = (event) =>
	{
		this.setState({value: event.target.value});
	}
	
	onAddItem = () => {
		this.setState({ myArray:[...this.state.myArray, this.state.value]})
	}
	
  render() {
    return (
		<div className="App">
			<div>
				<input type="text" value={this.state.value} onChange={this.functionChenge} />
				<button onClick={this.onAddItem}>Add Task</button>
			</div>
			{this.state.myArray.map(item => (
				<Task key={item}>{item}</Task>
			))}
		</div>
    );
  }
}

export {App};















