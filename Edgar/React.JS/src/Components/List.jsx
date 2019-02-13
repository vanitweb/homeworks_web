import React, { Component } from 'react';

class List extends Component {
  render() {
    
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit = {this.props.addItem}>
            <input placeholder="Task" />
            <button type="submit" onClick = {this.props.handleInput }> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export {List};