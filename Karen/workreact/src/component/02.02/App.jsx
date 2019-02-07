import React, { Component } from 'react';
import Display from './Input.jsx';
import Button from './Button.jsx';

class App extends Component {
  state = { gortox: '',
    gortox1: '',
    ardyunq: '',
    poxox: true,
  }

  mutq = (e) => {
    const value = e.target.textContent;
    if(this.state.poxox){
      this.setState({gortox: this.state.gortox += value})
    }else{
      this.setState({gortox1: this.state.gortox1 += value})
    }
  }
  ClearF = () => {
    this.setState({gortox: ''});
    this.setState({gortox1: ''})
    this.setState({poxox: true});
  }

  gortoxutyun = (e) => {
    let erkrordhert = '';
    const nshan = e.target.textContent;
    let ashx;
    this.setState({poxox: false});
    switch (erkrordhert){
      case '-':
        ashx -= parseFloat(this.state.gortox1);
        break;
      case '+':
        ashx += parseFloat(this.state.gortox1);
        break;
      case '/':
        ashx /= parseFloat(this.state.gortox1);
        break;
      case '*':
        ashx *= parseFloat(this.state.gortox1);
        break;
      default:
        ashx = parseFloat(this.state.gortox);
    }
    erkrordhert = nshan;
    this.setState({ardyunq: ashx});
  }
  render() {
    return (
      <table className="App">
        <Display val={this.state.gortox} va={this.state.gortox1}/>
        <tr>
          <Button onClick={this.mutq} gortoxutyun = {this.gortoxutyun} cl={this.ClearF}/>
        </tr>
      </table>
    )
  }
}
export default App;