import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Text extends Component {
	static propTypes= {
		tpel: PropTypes.string.isRequired,
	};
	render(){
		return(
			<div>{this.props.tpel}</div>
		);
	}
}
export {Text};