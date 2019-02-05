import React, {Component} from 'react';
import PropTypes from 'prop-types';



class Button extends Component {
	static propTypes = {
		  fun: PropTypes.func.isRequired,
	}
	render() {
		return(
			<div>
				<button onClick={this.props.fun}>Click1</button>
				<button onClick={this.props.fun}>Click2</button>
				<button onClick={this.props.fun}>Click3</button>
			</div>
		);
	}
}
export {Button};