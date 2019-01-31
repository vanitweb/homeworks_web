import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {Info} from './Components/Info';
import {MyButtons} from './Components/MyButtons';



class App extends Component {
  state = {
    value1 : '',
    
  }
  static propTypes = {
      myFunc: PropTypes.func.isRequired,
      myFunc2: PropTypes.func.isRequired,
      myFunc3: PropTypes.func.isRequired,
      value1: PropTypes.string.isRequired,
    }
    /*-----------------------------------*/
myFunc = (e) => {
    this.setState({value1: e.target.value});
};
    /*-----------------------------------*/
myFunc2 = (e) => {
  let myString ="Hello from React.This is a <p> tag"
  let newP = React.createElement("p",
                             { className: "paragraph" },
                               myString
                             );
  this.setState({value1: newP});
};
    /*-----------------------------------*/
myFunc3 = (e) => {
    let createInput = React.createElement("input", {placeholder: "Now I'm Input"})
    this.setState({value1: createInput});
};
    /*-----------------------------------*/
render() {
    const {value1} = this.state;
  return (
      <div>
      <MyButtons onChange = {this.myFunc} onChange2 = {this.myFunc2} onChange3 = {this.myFunc3}/>
      <Info element ={value1}/>
      </div>
    );
  }
}


export default App;
