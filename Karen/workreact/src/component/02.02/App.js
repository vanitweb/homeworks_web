import React, { Component } from 'react';
import Display from './input.jsx';
import Button from './button.jsx';

class App extends Component {
  state = { gortox: ''}
  mutq = (e) => {
    const value = e.target.value;
    switch (value) {
      case 'C':
        this.setState({gortox: ''});
        break;
      case '=':
        const x = eval(this.state.gortox);
        this.setState({gortox: x });
        break;
      default:
        this.setState({gortox: this.state.gortox += value});
        break;
    }
  }
  render() {
    return (
      <table className="App">
        <Display val={this.state.gortox} />
        <tr>
          <Button onClick={this.mutq} val='C' />
          <Button onClick={this.mutq} val='0' />
          <Button onClick={this.mutq} val='*' />
          <Button onClick={this.mutq} val='/' />
        </tr>
        <tr>
          <Button onClick={this.mutq} val='7' />
          <Button onClick={this.mutq} val='8' />
          <Button onClick={this.mutq} val='9' />
          <Button onClick={this.mutq} val='-' />
        </tr>
        <tr>
          <Button onClick={this.mutq} val='4' />
          <Button onClick={this.mutq} val='5' />
          <Button onClick={this.mutq} val='6' />
          <Button onClick={this.mutq} val='+' />
        </tr>
        <tr>
          <Button onClick={this.mutq} val='1' />
          <Button onClick={this.mutq} val='2' />
          <Button onClick={this.mutq} val='3' />
          <Button onClick={this.mutq} val='=' />
        </tr>
      </table>
    )
  }
}
export default App;