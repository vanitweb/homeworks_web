import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
	static propTypes = {
		func: PropTypes.string.isRequired,
		funca: PropTypes.string.isRequired,
	}
	render() {
		return(
			<div>
				<div>{this.props.func}</div>
				<h1>{this.props.funca}</h1>
			</div>
		);
	}
}
export {Text};