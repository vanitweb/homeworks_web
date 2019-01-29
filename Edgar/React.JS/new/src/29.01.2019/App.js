import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {MyButtons} from './MyButtons';



class App extends Component {
  state = {
    value1 : ''
  }
static propTypes = {
    value1: PropTypes.string.isRequired,
    OnVlueChange: PropTypes.func.isRequired;
};
myFunc = (e) => {
    const e = event.target.name;
}
render() {
    const myElem = false;
    const {value1, myFunc} = this.props;
  return (
      <div>
      <MyButtons onChange = {this.myFunc} />
      myElem && <h1>{value1}</h1>
      </div>
    );
  }
}


export default App;
