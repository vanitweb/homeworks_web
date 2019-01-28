import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import {Main} from './Main';
=======

import {Info} from './Info';
import {Input} from './Input';
>>>>>>> f90e77683c74f90f2f42ea3042079940f4e4aa16
class App extends Component {
	state = {
		value1 : ''
	}
	onChangeValue = (event) => {
		const val = event.target.value;
		this.setState({value1:val});
	};
clear = () => {
	this.setState({value1:''});
}
  render() {
	  const {value1} = this.state;
    return (
      <div className="App">
		<Input value = {value1} onChange = {this.onChangeValue} clearInput={this.clear}/>
		<Info value = {value1} />
      </div>
    );
  }
}

export default App;
