import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	static propTypes = {
		onchange: PropTypes.func
	};
	render() {
		const {onchange} = this.props;
		return(
			<div>
				<input onChange={onchange}></input>
			</div>
		);
	}
}

export {Search};