import React, { Component } from 'react';
import './App.css';
import {Info} from './Info';
import {Info2} from './Info2';
import {Input} from './Input';
import {Input2} from './Input2';

class App extends Component {
  state = {
    value1 : '',
    value1 : ''
  }
  onChangeValue = (event) => {
    const elem = event.target.value;
    this.setState({value1:elem});
  };
clear = () => {
  this.setState({value1:''});
}

 onChangeValue2 = (event) => {
    const elem2 = event.target.value;
    this.setState({value2:elem2});
    let str = document.getElementById('param').textContent;
    console.log("str", str);
  let res = str.split(" ");
  let found = res.filter(x => x === elem2);
  console.log(`handipum e ${found.length} angam`);
  };
  render() {
    const {value1} = this.state;
    const {value2} = this.state;
    return (
      <div className="App">
    <Input value = {value1} onChange = {this.onChangeValue} clearInput={this.clear}/>
    <Info value = {value1} />
    <Input2 value = {value2} onChange = {this.onChangeValue2}/>
    <Info2 value = {value2} />
    <h4 id = "param">Es im anush Hayastani sirum arevaham barn em sirum</h4>
      </div>
    );
  }
}

export default App;
