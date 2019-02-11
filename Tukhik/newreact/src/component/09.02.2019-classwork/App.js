import React, { Component } from 'react';
import  { observable, computed, action } from 'mobx';
import  { observer } from 'mobx-react';



@observer
class App extends Component {
	@observable text = "";

    
	@computed
	get updateText() {
		return `TTTTTT ${this.text}`;
	}
	
	changeText = (event)=> {
		this.text = event.target.value;
	}
	
    render() {
        return(
            <div>
				<input onChange={this.changeText} type="text" value={this.text}/>
				<h1>{this.updateText}</h1>
            </div>
        );
    }
}

export default App;