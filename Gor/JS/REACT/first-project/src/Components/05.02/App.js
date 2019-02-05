import React, { Component } from 'react';
import {Content} from './Content';
class App extends Component {
	state = {
		currentTime: (new Date()).toString(),
	}
	timeUpdate = () => {
		const time = (new Date()).toString();
		this.setState({currentTime:time});
	}
	componentDidMount() {
		setInterval(this.timeUpdate, 1000)
	}
	render() {
		const {currentTime} = this.state;
    	return (
			<div className="App">
				<Content timer={currentTime} />
			</div>
		);
  	}
}

export default App;