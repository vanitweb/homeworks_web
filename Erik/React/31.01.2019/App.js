import React, { Component } from 'react';
import './App.css';
import {Button} from './Button.js';
import {Text} from './Text.js';



class App extends Component {
  state = {
  	anun: "",
  	text: ""
  }

  click = (event) => {
  	const text1 = "1997";
  	const text2 = "1998";
  	const text3 = "1999";
  	this.setState({anun: event.target.textContent});
  	if(event.target.textContent === "Click1"){
  		this.setState({text : text1});
  	}
  	else if(event.target.textContent === "Click2"){
  		this.setState({text : text2});
  	}
  	else if(event.target.textContent === "Click3"){
  		this.setState({text : text3});
  	}
  }
  render() {
    return (
    <div className="App">
      
      <Button fun={this.click} />
      <Text func={this.state.anun} funca={this.state.text} />
    </div>
    );
  }
}

export default App;


