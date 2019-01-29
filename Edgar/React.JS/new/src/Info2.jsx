import React, { Component } from 'react';

class Info2 extends Component {
	
  render() {
	  const {value2} = this.props;
    return (
		<h1>{value2}</h1>		
    );
  }
}

export {Info2};