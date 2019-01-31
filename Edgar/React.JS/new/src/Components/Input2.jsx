import React, { Component } from 'react';

class Input2 extends Component {
	
  render() {
	  const {value2, onChange,} = this.props;
    return (
		<div>
		<input id="OutputText" value={value2} onChange={onChange} />
		<label for="OutputText" value={value2}>handipum e...</label>
		</div>
    );
  }
}

export {Input2};