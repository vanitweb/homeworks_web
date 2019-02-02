import React, { Component } from 'react';
import {Button} from './Button';


class App extends Component {
	
	state = {
		value: '',
		myArray: [],
		newVal: null
	};
	
	onChange = (event) => {
		const value = this.state.value;
		const newVal = this.state.newVal;
		this.setState({
			value: event.target.value,
			newVal: this.state.value
		})
		console.log(value);
	};
	
	onClick = (event) => {
		let myArray = this.state.myArray.slice();
		myArray.push(this.state.newVal);
		this.setState ({myArray: myArray})
		
	};
	
		
	
	render() {
		const {value, item, myArray, newVal} = this.state;
		return (
			<div>
				<Button name="addTask" onClick={this.onClick} onChange={this.onChange}/>
				{myArray.map(item=>(<p key={item}>{item}</p>))}	
			</div>
		);
  	}
}

export default App; 