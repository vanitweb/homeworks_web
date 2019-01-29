import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './Input';
import {Info} from './Info';
/*import {FindText} from './FindText';*/

class App extends Component {
  state = {value: ""}
  onChangeValue = (event)=>{
    const val = event.target.value;
    this.setState({value: val});
  }
  clear = () => {
  this.setState({value:''});
}
// found =() => {
//   const string = 'aajlkjjskdjfAlsj;gkejflksajfjskda'; 
//   this.setState({value: value});
//   const count = string.split(value).length-1; 
// }

  render() {
    const {value}=this.state;
    return (
      <div className="App">
       <Input value = {value} onChange={this.onChangeValue} clearInput={this.clear}/>
       <Info value = {value} />
       ///*<FindText value2 = {value} onFound={this.found} />*/
      </div>
    );
  }
}

export default App;
