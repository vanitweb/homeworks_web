import React, { Component } from 'react';
import {Button} from './Button';
import {Text} from './Text';
import {Button1} from './Button1';
import {Header} from './Header';
import {Img} from './Img';

class App extends Component {
	
	state = {
		name1: 'Text',
		name2: 'Button',
		name3: 'Header', 
		name4: 'Img',
		data_name1: 1,
		data_name2: 2,
		data_name3: 3,
		data_name4: 4,
		active_btn: null
	}
	
	onClick = (event) => {
		this.setState({active_btn: +event.target.getAttribute('data_name')})
	}
	
	render() {
		const {name1, name2, name3, name4, data_name1, data_name2, data_name3, data_name4, active_btn} = this.state;
		return (
			<div>
				<Button
					name={name1}
					data_name={data_name1}
					onClick={this.onClick}
				/>
				<Button
					name={name2}
					data_name={data_name2}
					onClick={this.onClick}
				/>
				<Button
					name={name3}
					data_name={data_name3}
					onClick={this.onClick}
				/>
				<Button
					name={name4}
					data_name={data_name4}
					onClick={this.onClick}
				/>
				<hr />
				{active_btn === 1 && <Text />}
				{active_btn === 2 && <Button1 />}
				{active_btn === 3 && <Header />}
				{active_btn === 4 && <Img />}
			</div>
		);
  	}
}

export default App;