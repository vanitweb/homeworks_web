import React, { Component } from 'react';
import Input from './input.jsx';
import Info from './info.jsx';

const himText = {
  sText: 'Cool Fancy Text Generator is a copy and paste font generator and font changer that creates'
};
let qanak = 0;
class App extends Component {
  state = {textInfo: ''};
  fun = (e) => {
    const txt = e.target.value;
    const a = himText.sText;
    qanak = a.split(txt).length - 1;
    this.setState({textInfo: txt});
  }
  mut = (e) => {
    const txt = e.target.value;
    himText.sText = txt;
  }
  render() {
    return (
      <div className="App">
        <Input value={this.state.textInfo} onChange={this.fun}/>
        <Info valu={qanak}/>
        <textarea onChange={this.mut}>{himText.sText}</textarea>
      </div>
    );
  }
}

export default App;
