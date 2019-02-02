import React, { Component } from 'react';
import {Button} from './Button';
import {Button1} from './Button1';
import {Header} from './Header';
import {Img} from './Img';

class App extends Component {
	
	state = {
		activeBtn: null
	}
	
	onClick = (event) => {
		this.setState({activeBtn: +event.target.getAttribute('nameData')})
	}
	
	render() {
		const {activeBtn} = this.state;
		return (
			<div>
				<Button	name='Button' nameData='1' onClick={this.onClick}/>
				<Button name='Header' nameData='2' onClick={this.onClick}/>
				<Button	name='Img'	nameData='3' onClick={this.onClick}/>
				{activeBtn === 1 && <Button1 />}
				{activeBtn === 2 && <Header />}
				{activeBtn === 3 && <Img />}
			</div>
		);
  	}
}

export default App;