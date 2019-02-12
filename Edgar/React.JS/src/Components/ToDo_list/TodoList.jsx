import React, { Component } from 'react'
class TodoList extends Component {
  render() {
     const {addElem, addItem} = this.props;
    return (
          
            <input placeholder="Task"/>
            <button type="submit" onclick = {addItem}> Add Task </button>
      
    )
  }
}

export default TodoList