import React, { Component } from 'react';

class TodoList extends Component {

   render() {
    const {value1,  onClickButton} = this.props;
      return (
      <form onSubmit = {onClickButton}>
      <input
      placeholder = 'enter task'
      value ={value1}
      
      name = 'text'/>
      <button onClick = {onClickButton} >Add task</button>
      </form>
    );
    }
}

export  {TodoList};