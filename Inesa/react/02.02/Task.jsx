import React, { Component } from 'react';
import {Button} from './Button';

class Task extends Component {
	state = {
		value:'katarvac e'
	}
	funcKatarel = () =>
	{
		this.setState({value:"+"});
	}
	funcJnjel = () =>
	{
		var a = true;
	}
  render() {
    return (
		a && <p> {this.props.children} 
			<Button onclick={this.funcKatarel} value={this.state.value}/>
			<Button value={"jnjel"} onclick={this.funcJnjel}/>
		</p>
		
	)
  }
}

export {Task};
