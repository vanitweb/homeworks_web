import React, { Component } from 'react';
import  { Tasks } from './Tasks';
import  { observable, computed, action } from 'mobx';
import  { observer } from 'mobx-react';
import PropTypes from 'prop-types';

@observer
class App extends Component {
    @observable text = "";
    constructor(props) {
        super(props);
        this.state = { tasks: [], text: '' };
        this.delateTasks = this.delateTasks.bind(this);
    }

    addTask(e) {
        e.preventDefault();
        let tasks = [ this.state.text, ...this.state.tasks ];
        
        
    }

    delateTasks(task, i){
        const tasks = this.state.tasks.slice();
        tasks.splice(i, 1);
        this.setState({tasks: tasks});
    }

    changeValue(e) {
        this.setState({ text: e.target.value})
    }
    
    isComplete(e) {
        e.target.textContent = 'Done';
        e.target.disabled = true;
    }
    
    render() {
        return(
            <div>
                <form >
                    <input
                        value={this.state.text}
                        onChange={(e) => {this.changeValue(e)}}
                    />
                    <button onClick = {(e) => this.addTask(e)}>add Tasks</button>
                </form>
                <Tasks tasks={this.state.tasks} delateTasks={this.delateTasks} isComplete={ (e) => this.isComplete(e)}/>
            </div>
        );
    }
}

export default App; 
/*


 - App (
        observable properties: searchValue, taskList, newTaskName, newTaskStartDate, newTaskEndDate;
        return: AddItem, TaskList, Input (search-i hamar)
    )
        - AddItem (
            props: newTaskName, newTaskStartDate, newTaskEndDate,
            return:
                3 Input (taski anuni u start/end date-i hamar),
                Button task avelacnelu hamar
        )
        - Input (
            props: value, onChange
            return: input
        )
        - Button (
            props: text, onClick
            return: button
        )
        - TaskList (
            props: taskList, searchValue
            computed property: filteredTaskList
            return: Task array
        )
            - Task (
                props: task,
                computed properties: dateInterval(taskStartDate - taskEndDate)
                return: task-ի անուն, ինտերվալ, Button (jnjelu hamar)
            )*/