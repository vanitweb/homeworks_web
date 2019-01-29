import React, { Component } from 'react';
import './App.css';
import {Text} from './Text.jsx';
import Input from './Input.jsx'


class App extends Component {
	state = {
		count: 0
	}
	lCnel = (tex, bar, count) => {
		let textindex = tex.indexOf(bar);
	    let str = tex.slice(textindex + bar.length);
		if(bar === ""){
			return;
		}
		if(textindex !== -1){
			count++;
			return this.lCnel(str,bar, count);
		}else{
			this.setState({count: count});	
		}
	}
	onChlicka = () => {
		let count = 0;
		let bar = document.getElementById("input").value;
		let tex = document.getElementById("p").textContent;
		this.lCnel(tex, bar,count);
	}
  render() {
    return (
		<div className="App">
			<Input onch={this.onChlicka}/>
			<Text tpel={this.state.count}/>
		</div>
    );
  }
}

export default App;


