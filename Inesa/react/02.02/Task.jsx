import React, { Component } from 'react';
import {Button} from './Button';

class Task extends Component {
	state = {
		value:'katarvac e',
		a:"true"
	}
	funcKatarel = () =>
	{
		this.setState({value:"+"});
	}
	funcJnjel = () =>
	{
		this.setState({a:"false"});
	}
  render() {
    return (
		(this.state.a==="true") && <p> {this.props.children} 
			<Button onclick={this.funcKatarel} value={this.state.value}/>
			<Button onclick={this.funcJnjel} value={"jnjel"}/>
		</p>
		
	)
  }
}

export {Task};
