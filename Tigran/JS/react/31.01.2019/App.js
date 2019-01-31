import React, { Component } from 'react';
import './App.css';
import {Text} from './Text.js';
import Button from './button.js';



class App extends Component {
	state = {
		knopka : "",
		text : "",
	}
	sexmel = (event) => {
		let p1 = "aaaaaaaaaaaaaaaaaaaaaaaaa";
		let p2 = "bbbbbbbbbbbbbbbbbbbbbbbbb";
  		let p3 = "ccccccccccccccccccccccccc";
		this.setState({knopka : event.target.textContent});
		if (event.target.textContent === "1 button") {
			this.setState({text : p1});
		}else if(event.target.textContent === "2 button"){
			this.setState({text : p2});
		}else if(event.target.textContent === "3 button"){
			this.setState({text : p3});
		}else{
			console.log("chka")
		}
	}
  render() {

  	const po = <p>{this.state.knopka}</p>
    return (
		<div className="App">
			<Button fun={this.sexmel}/>
			<Text tpel={this.state.text}/>
			{po}
		</div>
    );
  }
}
export default App;


