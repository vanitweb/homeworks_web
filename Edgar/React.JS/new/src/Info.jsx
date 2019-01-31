import React, { Component } from 'react';

class Info extends Component {
	
  render() {
	  const {element} = this.props;
    return (
		<h1>{element}</h1>		
    );
  }
}

export {Info};