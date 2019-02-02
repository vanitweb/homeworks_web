import React, { Component } from 'react';
import  { Tasks } from './Tasks';

class App extends Component {
	
    constructor(props) {
        super(props);
        this.state = { tasks: [], text: '' };
        this.delateTasks = this.delateTasks.bind(this);
    }

    addTask(e) {
        e.preventDefault();
        this.setState({ 
        	tasks: [ this.state.text, ...this.state.tasks ],
        	text: ''
        });
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