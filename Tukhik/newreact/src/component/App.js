import React, { Component } from 'react';
import {Input} from './Input';
import {Button} from './Button';

class App extends Component {
	static propTypes = {
		
	};
	
	
  state = {value: ""}
  onChangeValue = (event)=>{
    const val = event.target.value;
    this.setState({value: val});
  }
  clear = () => {
  this.setState({value:''});
}

  render() {
    const {value}=this.state;
    return (
      <div className="App">
       <Input value = {value} onChange={this.onChangeValue} clearInput={this.clear}/>
       
   
      </div>
    );
  }
}

export default App;
