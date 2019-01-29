import React, {Component} from 'react';



class Button extends Component {
	render() {
		return(
			<div>
				<button onClick={this.props.datark}>Click</button>
			</div>
		);
	}
}
export {Button};