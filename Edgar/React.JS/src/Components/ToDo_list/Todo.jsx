import React, { Component } from 'react';

class Todo extends Component {
  render() {
   const {onSubmit,onChange,newTodo, valueInput} = this.props; 
    return (
      <form onSubmit= {onSubmit}>
      
      <input 
      type="text" 
      name = "newTodo" 
      id = "newTodo" 
      onChange = {onChange}
      value = {valueInput}/>
      <button type = "submit">Add Todo</button>
      </form>
    );
  }
}

export {Todo};