import React, { Component } from 'react';
import {Button} from './Button';
import {Content} from './Content';
class App extends Component {
	state = {
		currentTask: '',
		list: [],
	}
	clickComolete = (event) => {
		const key = event.target.parentNode.className;
		console.log(key);
		//this.setState({complete});
	}
	onchange = (event) => {
		this.setState({currentTask: event.target.value});
	}
	onclick = () => {
		let arr = [...this.state.list];
		arr.push({key: new Date(), value:this.state.currentTask, complete: 'Complete', isActive: true});
		this.setState({list: arr});
	}
	render() {
		const {list} = this.state;
    	return (
		  <div className="App">
			<Button onchange={this.onchange} onclick={this.onclick}/>
			{list.map(item => (
            		<Content key={item.key} item={item.value} complete={item.complete} active={item.isActive} clickcomolete={this.clickComolete} />
          	))}
		  </div>
		);
  	}
}

export default App;