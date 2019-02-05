import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
	static propTypes = {
		valueVercnel: PropTypes.func.isRequired,
	};

	render(){
		return(
		<div>
					<input onChange={this.props.valueVercnel} value={this.props.r}/>

		</div>
		);
	}
}
export default Input;
