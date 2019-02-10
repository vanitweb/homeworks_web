import React, { Component } from 'react';
import Input from './input.jsx';
import Info from './info.jsx';



class App extends Component {
  state = {grel: '',
    d: []};
  
  fun = (e) => {
   const x = e.target.value;
   this.setState({grel: x});
  }
  dnox = () => {
    
    this.setState({d: [...this.state.grel]});

  }
  render() {
    return (
      <div className="App">
        <Input val={this.state.grel} onC={this.fun} dnox={this.dnox} />
        <Info valu={this.state.d}/>
      </div>
    );
  }
}

export default App;
