import React, { Component } from 'react';
import Input from './input.jsx';
import Info from './info.jsx';

class App extends Component {
  state = {textInfo: ''};
  fun = (e) => {
    const txt = e.target.value;
    this.setState({textInfo: txt});
  }
  jnjel = () => {
    this.setState({textInfo: ''})  
  }
  render() {
    return (
      <div className="App">
        <Input value={this.state.textInfo} onChange={this.fun} jnjel={this.jnjel}/>
        <Info valu={this.state.textInfo}/>
      </div>
    );
  }
}

export default App;
