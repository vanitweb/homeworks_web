import React, { Component } from 'react';
import Info from './Info';

const person = [
	{
		name: 'Anna',
		surname: 'Hakobyan', 
		age: 20
	},
	{
		name: 'Anush',
		surname: 'Sahakyan',
		age: 25
	},
	{
		name: 'Tigran',
		surname: 'Tumanyan',
		age: 30
	}
]


class Input extends Component {
	render() {
		return (
			<div>
				<Info items={person}/>
			</div>
		);
	}
}

export default Input;