import React, { Component } from 'react';

class Clock extends React.Component {
	
	state = {
	  time:Date().toLocaleString()//Date().toLocaleString()-ays pahi jamn e
	};
	
	componentDidMount = () =>  
	{
		let a = setInterval(() => this.tick(),1000);//setIntervalov kanchuma tick funkcian vory amen varkyan kanchvuma u cuyc e talis ayd pahi jamy
	}
	tick = () =>
	{
		this.setState({
		  time:Date().toLocaleString()
		});
	}
	
	
	render() {
		return (
		  <div>
			{this.state.time}
		  </div>
		);
	}
}

export {Clock};








