import React, {Component} from 'react';


class Input extends Component {
	render(){
		return(
		<div>
			<input  id="input"/>
			<button onClick={this.props.onch}>click</button>
		</div>
		);
	}
}
export default Input;