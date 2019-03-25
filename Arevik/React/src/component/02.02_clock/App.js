import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props)
		this.changeTime()
		this.state = {
			date: (new Date()).toLocaleString()
		}
	}
	componentWillMount() {
		console.log('component will be mount');
	};  //Mounting events
	componentDidMount() {
		console.log('component was  mounted');
	};	//Mounting events
	
	componentWillReceiveProps() {};
	shouldComponentUpdate() {
		return false;
	};
	componentWillUpdate() {
		console.log('component was  updateed');
	};	
	componentDidUpDate() {};
	
	componentWillUnmount() {
		
	};
 
 	changeTime() {
		setTimeout(()=>{
			console.log('time changed');
			this.setState({
				date: (new Date()).toLocaleString()
			})
		}, 1000);
	}
 
  render() {
    return <div>{this.state.date}</div>;
  }
}


export default App;