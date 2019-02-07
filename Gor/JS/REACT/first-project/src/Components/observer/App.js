import React, { Component } from 'react';
import {Button} from './Button';
import {Content} from './Content';
import { observable } from 'mobx';
import { observer }  from 'mobx-react';
@observer
class App extends Component {
	state = {
		list: []
	}
	@observable currentTask = "";
	close = (event) => {
		const arr = event.target.parentNode.parentNode.childNodes;
		const element = event.target.parentNode;
		let indexOfElement;
		for(let i = 1; i < arr.length; i++) {
			if(arr[i] === element) {
				indexOfElement = i;
				break;
			}
		}
		let temp = [...this.state.list];
		temp.splice(indexOfElement - 1, 1);
		this.setState({list: temp});
	}
	clickComolete = (event) => {
		const arr = event.target.parentNode.parentNode.childNodes;
		const element = event.target.parentNode;
		let indexOfElement;
		for(let i = 1; i < arr.length; i++) {
			if(arr[i] === element) {
				indexOfElement = i;
				break;
			}
		}
		let temp = [...this.state.list];
		temp[indexOfElement - 1].complete = "Done";
		this.setState({list: temp});
	}
	onchange = (event) => {
		this.currentTask = event.target.value;
	}
	onclick = () => {
		let arr = [...this.state.list];
		arr.push({key: new Date(), value:this.currentTask, complete: 'Complete'});
		this.setState({list: arr});
	}
	render() {
		const {list} = this.state;
    	return (
		  <div className="App">
			<Button onchange={this.onchange} onclick={this.onclick}/>
			{list.map(item => (
            		<Content key={item.key} item={item.value} complete={item.complete} clickcomolete={this.clickComolete} close={this.close} />
          	))}
		  </div>
		);
  	}
}

export default App;