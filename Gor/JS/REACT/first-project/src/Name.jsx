import React, { Component } from 'react';

class Name extends Component {
	onBtnClick = () => {
		this.props.onCangeName();
	};
  render() {
    return (
      <div className="App">
      	{this.props.name}
      	<button onClick={this.onBtnClick}>update</button>
      </div>
    );
  }
}

export {Name};

/*
function() {
	const a = {
		b = 5;
	}
}*/