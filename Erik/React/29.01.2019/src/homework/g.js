import React, { Component } from 'react';
import './App.css';
import {Input} from './Input.js';
import {Text} from './Text.js';
import {Button} from './Button.jsx';


class App extends Component {
	state = {
		tex: "",
		jnjir: "",
	}
	onChangeanun = (event) => {
		this.setState({tex: this.state.jnjir + event.target.value});
	}
	onClickjnji = () => {
		var dat = document.getElementsByTagName('input')[0];
		dat.value = "";
		this.setState({jnjir:this.state.tex});
		
	}
  render() {
	  
    return (
		<div className="App">
			<Input poxel={this.onChangeanun}/>
			<Text arjeq={this.state.tex}  />	
			<Button datark={this.onClickjnji}/>
		</div>
    );
  }
}

export default App;


