import React, { Component } from 'react';
import {Button} from './Button';
class Task extends Component {
	state = {
		value:'katarvac e?'
	}
	funcKatarel = () =>
	{
		this.setState({value:"aaa"});
	}
  render() {
    return (
	<div>
		<p> {this.props.children} 
			<Button onclickB={this.funcKatarel} value={this.state.value}/>
			<Button value={"jnjel"}/>
		</p>
		
	</div>
	)
  }
}

export {Task};