import React, { Component } from 'react';
import {Button} from './Button';
import {Info} from './Info';
import {Content} from './Content';
class App extends Component {
	state = {
		nameOne: 'Button1',
		nameTwo: 'Button2',
		nameThree: 'Button3',
		btnName: ''
	}
	/*const buttonNames = {nameOne: 'Button1', nameTwo: 'Button2', nameThree: 'Button3'};*/
	onclick = (e) => {
		this.setState({btnName: e.target.value});
	}
	render() {
		const {nameOne, nameTwo, nameThree, btnName} = this.state;
    	return (
		  <div className="App">
			<Button onclick={this.onclick} name={nameOne} />
			<Button onclick={this.onclick} name={nameTwo} />
			<Button onclick={this.onclick} name={nameThree} />
			<Info header={btnName} />
			{btnName && <Content btn={btnName} />}
		  </div>
		);
  	}
}

export default App;