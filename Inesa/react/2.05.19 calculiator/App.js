import React, { Component } from 'react';
import './App.css';
import {Tver} from './Tver';
import {Nshan} from './Nshan';

class App extends Component {
	state = {
		tiv1:0,
		tiv2:0,
		ardyunq:0,
		gorcoxutyanNshan:"",
		vorerordAndam:0,
	}
	grel = (event) =>
	{
		this.state.vorerordAndam++;
		if(this.state.vorerordAndam === 1)
		{
			this.setState({tiv1: parseInt(event.target.value)});
		}
		if(this.state.vorerordAndam === 2)
		{
			this.setState({tiv2: parseInt(event.target.value)});
		}
	}
	
	nshan = (event) =>
	{
		this.setState({gorcoxutyanNshan : event.target.value});
	}
	
	clear = () =>
	{
		
			this.setState({tiv1 : 0});
			this.setState({tiv2 : 0});
			this.setState({gorcoxutyanNshan : ""});
			this.setState({ardyunq : 0});
			this.setState({vorerordAndam : 0});
	}
	patasxan = () => 
	{
		if(this.state.gorcoxutyanNshan === "+")
		{
			const sum = this.state.tiv1 + this.state.tiv2;
			this.setState({ardyunq: sum});
		}
		if(this.state.gorcoxutyanNshan === "-")
		{
			const sum = this.state.tiv1 - this.state.tiv2;
			this.setState({ardyunq: sum});
		}
		if(this.state.gorcoxutyanNshan === "*")
		{
			const sum = this.state.tiv1 * this.state.tiv2;
			this.setState({ardyunq: sum});
		}
		if(this.state.gorcoxutyanNshan === "/")
		{
			const sum = this.state.tiv1 / this.state.tiv2;
			this.setState({ardyunq: sum});
		}
	}
  render() {
    return (
		<div>
			<div>
				<span>{this.state.tiv1}</span>
				<span>{this.state.gorcoxutyanNshan}</span>
				<span>{this.state.tiv2}</span>
				<span> = </span>
				<span>{this.state.ardyunq}</span>
			</div>
			<Tver onclick={this.grel}/>
			<Nshan onclick={this.nshan} value={this.state.gorcoxutyanNshan}/>
			<button onClick={this.patasxan}>patasxan</button>
			<button onClick={this.clear}>Clear</button>
		</div>
	);
  }
}

export {App};















