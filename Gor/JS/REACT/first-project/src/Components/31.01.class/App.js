import React, { Component } from 'react';
import {Button} from './Button';
import {Content} from './Content';
class App extends Component {
	state = {
		currentTask: '',
		list: []
	}
	onchange = (event) => {
		this.setState({currentTask: event.target.value});
	}
	onclick = () => {
		let arr = [...this.state.list];
		arr.push({key: new Date(),value:this.state.currentTask});
		this.setState({list: arr});
	}
	render() {
		const {list} = this.state;
    	return (
		  <div className="App">
			<Button onchange={this.onchange} onclick={this.onclick}/>
			{list.map(item => (
            		<Content key={item.key} item={item.value} />
          	))}
		  </div>
		);
  	}
}

export default App;