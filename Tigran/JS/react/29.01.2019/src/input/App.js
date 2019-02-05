import React, { Component } from 'react';
import './App.css';
import {Value} from './value';
import {Input1} from './input';



class App extends Component {
  state = {
    anun : "",
    azganun : "",
  }
  poxel = (iradarcutyun) => {
    this.setState({anun : this.state.azganun + iradarcutyun.target.value })
  };

  jnji = ()=> {
    this.state.azganun += document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].value = "";
  }
  
  render() {
    return (
      <div className="App">

      <Input1 grac={this.poxel}/>

      
      <Value text={this.state.anun}/>


        <button onClick={this.jnji}>sexmi</button>
      </div>
      
    );
  }
}

export default App;
