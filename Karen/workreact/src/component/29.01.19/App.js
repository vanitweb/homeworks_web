import React, { Component } from 'react';
import Input from './input.jsx';
import Info from './info.jsx';

class App extends Component {
  state = {anun1: '11111',
          anun2: '22222',
          anun3: '33333',
          grel: ''};
  fun = (e) => {
    const x = e.target.innerHTML;
    this.setState({grel: x});
  }
  render() {
    return (
      <div className="App">
        <Input value={this.state} onClick={this.fun}/>
        <Info valu={this.state.grel}/>
      </div>
    );
  }
}

export default App;
