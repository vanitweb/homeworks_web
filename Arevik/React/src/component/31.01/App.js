import React, { Component } from 'react';
import  { Tasks } from './Tasks';
import  { observable, computed, action } from 'mobx';
import  { observer } from 'mobx-react';


@observer
class App extends Component {
	
	state = {
		tasks: [],
		text: ''
	}

    addTask(e) {
        e.preventDefault();
        this.setState({ 
        	tasks: [ this.state.text, ...this.state.tasks ],
        	text: ''
        });
    }

    delateTasks = (task, i) => {
		return(const tasks = this.state.tasks.slice();
        tasks.splice(i, 1);
        this.setState({tasks: tasks});
		);
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