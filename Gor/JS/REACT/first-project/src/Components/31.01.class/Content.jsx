import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
	static propTypes = {
		item: PropTypes.string,
		complete: PropTypes.string,
		active: PropTypes.bool,
		clickcomolete: PropTypes.func
	};
	render() {
		const {item,
			   complete,
			   active,
			   clickcomolete
			  } = this.props;
		return(
			active && <div>
				<h1>{item}</h1>
				<button onClick={clickcomolete}>{complete}</button>
				<button>&times;</button>
			</div>
		);
	}
}

export {Content};