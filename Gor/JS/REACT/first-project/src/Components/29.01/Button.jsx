import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	static propTypes = {
			onclick: PropTypes.func.isRequired
		}
	render() {
		const {onclick} = this.props;
		return (
			
			<div>
				<button value="btn1" onClick={onclick}>Button 1</button>
				<button value="btn2" onClick={onclick}>Button 2</button>
				<button value="btn3" onClick={onclick}>Button 3</button>
			</div>
		);
	}
}

export {Button};