import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
	static propTypes = {
		fun: PropTypes.func.isRequired,
	};
	render(){
		return(
			<div>
				<input onChange={this.props.fun} type="number"/>
			</div>
		);
	}
}
export default Input;