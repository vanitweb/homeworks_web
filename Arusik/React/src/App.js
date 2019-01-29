import React, { Component } from 'react';
import {Input} from './Input';
import {Info} from './Info';
import {Button} from './Button';
class App extends Component {

    state = {
  	    value: ''
    };
    onValueChange = (event) => {
  	    this.setState({value: event.target.value});
    };
    delInfo = () =>{
        this.setState({value: ''});
    };
    render() {
  	    const {value} = this.state;
        return (
          <div>
      	      <Input value={value} changeText={this.onValueChange} />
      	      <p>{value}</p>
      	      <Info value={value} changeText={this.onValueChange}/>
              <Button del={this.delInfo}>Delete</Button>
          </div>
        );
    }
}

export default App;