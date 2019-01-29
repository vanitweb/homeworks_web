import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {Info} from './Info';
import {Input} from './Input';
import {Search} from './Search';
import {Text} from './Text';
import {Button} from './Button';

class App extends Component {
	state = {
		value1 : '',
		count : 0,
		searchValue: '',
		text: "asasasassgdsghfaSasasjkhgas",
		btnName: ''
	}
	onclick = (e) => {
		this.setState({btnName: e.target.value});
	}
	search = (event) => {
		const val = event.target.value;
		this.setState({searchValue:val});
		const txt = this.state.text;
		const splitTxt = txt.split(this.state.searchValue);
		this.setState({count:splitTxt.length - 1});
	};
	claculate = () => {
		const txt = this.state.text;
		const splitTxt = txt.split(this.state.searchValue);
		this.setState({count:splitTxt.length - 1});
	}
	onChangeValue = (event) => {
		const val = event.target.value;
		this.setState({value1:val});
	};
	clear = () => {
		this.setState({value1:''});
	}
	render() {
		const {value1, searchValue, count, text, btnName} = this.state;
    	return (
		  <div className="App">
			<Input value = {value1} onChange = {this.onChangeValue} clearInput={this.clear}/>
			<Info value = {value1} val={btnName}/>
			<Search value = {searchValue} onchange = {this.search} searchCount = {count}/>
			<Text text={text}/>
			<Button onclick={this.onclick} />
		  </div>
		);
  	}
}

export default App;
