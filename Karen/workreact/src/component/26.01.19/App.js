import React, { Component } from 'react';
import Input from './input.jsx';
import Info from './info.jsx';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
@observer
class App extends Component {
  @observable textInfo = '';
  @observable textInfo1 = '';

  fun = (e) => {
    const txt = e.target.value;
    this.textInfo = txt;
    this.textInfo1 = txt;
  }
  jnjel = () => {
    this.textInfo = '';  
  }
  render() {
    return (
      <div className="App">
        <Input value={this.textInfo} onChange={this.fun} jnjel={this.jnjel}/>
        <Info valu={this.textInfo1}/>
      </div>
    );
  }
}

export default App;
