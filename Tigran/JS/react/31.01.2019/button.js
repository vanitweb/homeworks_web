import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
	static propTypes = {
		fun: PropTypes.func.isRequired,
	};
	render(){
		return(
		<div>
			<button onClick={this.props.fun}>1 button</button>
			<button onClick={this.props.fun}>2 button</button>
			<button onClick={this.props.fun}>3 button</button>

		</div>
		);
	}
}
export default Button;