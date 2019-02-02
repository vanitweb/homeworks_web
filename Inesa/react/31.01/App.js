import React, { Component } from 'react';
import './App.css';
import {Button} from './Button';
import {Info} from './Info';

class App extends Component {
	
	state = {
		value1:'Button1',
		value2:'Button2',
		value3:'Button3'
	}
	functionChenge = (event) =>
	{
		this.setState({value: event.target.value});
		console.log(event.target.value);
	}
  render() {
    return (
		<div className="App">
			<h1>Menue</h1>
			<Button value={this.state.value1} onAChange={this.functionChenge}></Button>
			<Button value={this.state.value2} onAChange={this.functionChenge}></Button>
			<Button value={this.state.value3} onAChange={this.functionChenge}></Button>
			<Info value={this.state.value}/>
		</div>
    );
  }
}

export {App};















