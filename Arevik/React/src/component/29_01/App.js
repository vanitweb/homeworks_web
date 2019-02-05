import React, { Component } from 'react';
import {Button} from './Button';

class App extends Component {
	
	state = {
		name1: 'Button1',
		name2: 'Button2',
		name3: 'Button3'
	}
	
	onClick = (event) => {
		alert(event.target.textContent)
	};
	
	render() {
		const {name1, name2, name3} = this.state;
		return (
			<div>
				<Button name={name1} onClick={this.onClick} />
				<Button name={name2} onClick={this.onClick} />
				<Button name={name3} onClick={this.onClick} />
			</div>
		);
  	}
}

export default App;