import React, { Component } from 'react';

class Search extends Component {
	
  render() {
	  const {value, onchange, searchCount} = this.props;
    return (
		<div>
			<input value={value} onChange={onchange} />{searchCount}
		</div>
    );
  }
}

export {Search};