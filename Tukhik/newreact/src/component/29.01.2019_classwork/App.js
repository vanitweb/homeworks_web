import React, { Component } from 'react';
import {Button} from './Button';

class App extends Component {
	
	onClick = (event) => {
		alert(event.target.textContent)
	};
	
	render() {
		return (
			<div>
				<Button name='Button1' onClick={this.onClick} />
				<Button name='Button2' onClick={this.onClick} />
				<Button name='Button3' onClick={this.onClick} />
			</div>
		);
  	}
}

export default App;