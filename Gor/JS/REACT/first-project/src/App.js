import React, { Component } from 'react';

import {Info} from './Info';
import {Input} from './Input';
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
