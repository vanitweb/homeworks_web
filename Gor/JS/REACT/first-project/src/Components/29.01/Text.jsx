import React, { Component } from 'react';

class Text extends Component {
	
  render() {
	  const {text} = this.props;
	  return (
		<p>{text}</p>
    );
  }
}

export {Text};