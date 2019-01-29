import React, { Component } from 'react';
import {Input} from './Input';
import {Info} from './Info';

class App extends Component {

  state = {
  	value: ''
  };
  onValueChange = (event) => {
  	this.setState({value: event.target.value});
  };

  render() {
  	const {value} = this.state;
    return (
      <div>
      	<Input value={value changeText={this.onValueChange}/>
      	<p>{value}</p>
      	<Info value={value} changeText={this.onValueChange}/>
      </div>
    );
  }
}

export App;