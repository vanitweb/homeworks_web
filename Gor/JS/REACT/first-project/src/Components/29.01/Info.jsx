import React, { Component } from 'react';

class Info extends Component {
	
  render() {
	  const {value, val} = this.props;
    return (
		<h1>{value} {val}</h1>		
    );
  }
}

export {Info};