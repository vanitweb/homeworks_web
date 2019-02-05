import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Input} from './Input';
import {Info} from './Info';
import {FindText} from './FindText';

const TEXT = 'aajlkjjskd jfAlsj;gkejflksajfjskda';

class App extends Component {
  state = {value: "", value5: '', count: 0}

  onChangeValue = (event)=>{
    const val = event.target.value;
    this.setState({value: val});
  }
  clear = () => {
  this.setState({value:''});

}
 found =(event) => {
   const evVal = event.target.value;
   this.setState({value5: evVal});
   const count = TEXT.split(evVal).length-1; 
   this.setState({value5: evVal, count: count});
}

  render() {
    const {value, value5, count}=this.state;
    return (
      <div className="App">
       <Input value = {value} onChange={this.onChangeValue} clearInput={this.clear}/>
       <Info value = {value} />
       <FindText value2 = {value5} onFound={this.found} />
	   <p>{TEXT}</p>
	   <p>{count}</p>
      </div>
    );
  }
}

export default App;
