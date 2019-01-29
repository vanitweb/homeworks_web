import React, { Component } from 'react';

class Info extends Component {
	
  render() {
	  const {value1} = this.props;
    return (
		<h1>{value1}</h1>		
    );
  }
}

export {Info};