import React, { Component } from 'react';
import './App.css';
import {Tver} from './Tver';
import {Nshan} from './Nshan';

class App extends Component {
	state = {
		tiv1:undefined,
		tiv2:undefined,
		ardyunq:undefined,
		gorcoxutyanNshan:"",
		vorerordAndam:0
	}
	
	grel = (event) =>
	{
		this.state.vorerordAndam++;
		if(this.state.vorerordAndam === 1)
		{
			this.setState({tiv1: event.target.value});
		}
		if(this.state.vorerordAndam === 2)
		{
			this.setState({tiv2: event.target.value});
		}
	}
	
	nshan = (event) =>
	{
		if(this.state.gorcoxutyanNshan==="")
		{
			this.setState({gorcoxutyanNshan : event.target.value});
		}
	}
	
	clear =() =>
	{
			this.setState({tiv1 : undefined});
			this.state.tiv2=undefined;
			this.state.gorcoxutyanNshan="";
			this.state.vorerordAndam = 0;
	}
	patasxan = () => 
	{
		if(this.state.gorcoxutyanNshan === "+")
		{
			this.setState({ardyunq:this.state.tiv1+this.state.tiv2});
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
			<button onclick={this.patasxan}>patasxan</button>
			<button onclick={this.clear}>Clear</button>
		</div>
	);
  }
}

export {App};















