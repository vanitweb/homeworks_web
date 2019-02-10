import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
	static propTypes= {
		sarqel: PropTypes.func.isRequired,
	};
	render(){
		return(
			<div>
				<button onClick={this.props.sarqel}>sexmi</button>
			</div>
		);
	}
}
export default Text;