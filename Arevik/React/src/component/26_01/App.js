import React, { Component } from 'react';
import {Info} from './Info';
import {Input} from './Input';
import {Search} from './Search';
import {Button} from './Button';

class App extends Component {
	
	state = {
		value1: '',
		value2: '',
		count: 0,
		myText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
	}
	
		
	findCount = (event) => {
		const value3 = event.target.value;
		const txt = this.state.myText;
		this.setState({value2: value3, count: ({txt}.match(/{value3}/g) || []).length});
	};
	
	
	onChangeValue = (event) => {
		const val = event.target.value;
		this.setState({value1:val});
	};
	
	clearInput = () => {
		this.setState({value1:''});
	};
	
	render() {
		const {value1, value2, count, myText} = this.state;
    	return (
		  <div>
			<Input value ={value1} onChange ={this.onChangeValue} clearInput={this.clearInput}/>
			<Info value = {value1} />
			<Search myText={myText} count={count} value={value2} onChange={this.findCount} />
		  </div>
		);
  	}
}

export default App;