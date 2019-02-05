import React, { Component } from 'react';
import './App.css';
import Text from './button.js';
import Input from './input.js';

class App extends Component {
	state = {
		list : [],
		value1 : "",
	}
	valueVercnel = (event) => {
		this.setState({value1 : event.target.value});
	}
	sarqel = () => {
		this.setState({
  			list: [...this.state.list, {key1 :  this.state.value1, value2 : true}],
  			value1 : "",
		})
	}
	jnjel = (event) => {
		let masiv =  [...this.state.list];
		let data = event.target.parentElement.parentElement.getAttribute("data-index");
		masiv.splice(data,1);
		this.setState({
  			list: [...masiv]
		})
	}
	sarecnel = (event) => {
		let masiv =  [...this.state.list];
		let data = event.target.parentElement.parentElement.getAttribute("data-index");
		masiv[data].value2 = false;
		this.setState({
  			list: masiv
		})
	}
  render() {
    return (
		<div className="App">
			<Input valueVercnel={this.valueVercnel} r={this.state.value1}/>
			<Text sarqel={this.sarqel}/>
			{this.state.list.map((item , index) => (
				<li data-index={index} key={index}>
				{item.key1} {item.value2
				 && <div>
						<button onClick={this.jnjel}>del</button>
						<button onClick={this.sarecnel}>sarecnel</button> 
					</div>
				}
				</li>
			))}
		</div>
    );
  }
}
export default App;