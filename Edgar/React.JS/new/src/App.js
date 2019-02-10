import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './Input';
import {Info} from './Info';

class App extends Component {
    state = {
      name: ""  
    };
    onChangeValue = (elem) => {
        const m = elem.target.value;
        this.setState({name: m});
    }
  render() {
    const {name} = this.state;
    return (
      <div className="App">
      <Input value1 = {name} onChange = {this.onChangeValue}/>
      <Info value = {name}/>
      </div>
    );
  }
}

export default App;
