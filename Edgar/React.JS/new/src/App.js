import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MyClass} from './MyClass';

class App extends Component {
    state = {
      name: "Jhon"  
    };
    ymF = () => {
        this.setState({name:"SEd"});
    }
  render() {
    return (
      <div className="App">
        <MyClass  name = {this.state.name}/>
        
        <button > </button>  
      </div>
    );
  }
}

export default App;
