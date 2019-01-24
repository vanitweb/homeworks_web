import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Name} from './Name';
class App extends Component {
	state={
		name : 'Gor'
	}
	onCangeName = () => {
		this.setState({name:"Name1"});
	};
  render() {
    return (
      <div className="App">
		<Name name = {this.state.name} onCangeName={this.onCangeName}/>
		<button onClick={this.onCangeName}>updateName</button>
      </div>
    );
  }
}

export default App;
