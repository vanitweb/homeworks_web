import React, { Component } from 'react';

class Data extends Component {

	render() {
		const {message} = this.props;
    	return (
		  <div>
				{message}
		  </div>
		);
  	}
}

export {Data};