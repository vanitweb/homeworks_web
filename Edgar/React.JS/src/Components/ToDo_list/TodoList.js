import React, { Component } from 'react';
import {Todo} from './Components/Todo';
import './App.css';

class ToDoList extends Component {
	state = {
		newTodo: '',
		toDoArray: []
	}

	formSubmited = (e) =>{
		e.preventDefault();
		this.setState({
			newTodo: '',
			toDoArray:[...this.state.toDoArray, {title:this.state.newTodo, done:false}]
		});
	}

	newTodoChanged = (e) =>{
		const newTodoElem = e.target.value;
		this.setState({
			newTodo:newTodoElem
		});
	}
	
	
	render() {
		const {message, newTodo} = this.state;
    	return (
		  <div>
		  <Todo 
			  onSubmit={this.formSubmited}
			  onChange={this.newTodoChanged}
			  valueInput={newTodo}/>
		  	<ul>
		  	{this.state.toDoArray.map(item =>{
		  		return <li key = {item.title}>
		  		{item.title}</li>
		  	})}
		  	</ul>
		  </div>
		);
  	}
}

export default ToDoList;