import React, { Component } from 'react';
import react from'./react.png';

class Img extends Component {
	render() {
		return (
			<div>
				<img src={react} alt="react" />
			</div>
		);
	}
}
export {Img};