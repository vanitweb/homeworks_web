import React, { Component } from 'react';
import './App.css';

import {Input} from './Input';
import {Info} from './Info';

class ReactLifeCycleExperiment extends Component {
  state = {
	  inputText: ''
  };
  
  constructor() {
	  super();
	  console.log('constructor');
  }
  
  static getDerivedStateFromProps(nextProps) {
	  console.log('getDerivedStateFromProps');
	  return null;
  }
  
  getSnapshotBeforeUpdate() {
	  console.log('getSnapshotBeforeUpdate');
	  return {};
  }
  
  componentDidMount() {
	  console.log('componentDidMount');
  }
  
  shouldComponentUpdate() {
	  console.log('shouldComponentUpdate');
	  return true;
  }
  
  componentDidUpdate() {
	  console.log('componentDidUpdate');
  }
  
  componentWillUnmount() {
	  console.log('componentWillUnmount');
  }
  
  componentDidCatch(err) {
	  console.log('This is our error', err);
  }
  
  static getDerivedStateFromError() {
	  console.log('getDerivedStateFromError');
	  return {hasError: true};
  }

  onValueUpdate = (event) => {
    const val = event.target.value;
    this.setState({inputText: val});
  };

  render() {
    const {inputText, hasError} = this.state;
    // const inputText = this.state.inputText;
    console.log('render');
    const DATA = [
      'value1',
      'value2',
      'value3',
      'value4',
      'value5'
    ];
    return (
      <div className="App">
        {hasError ? 
          <div>has error</div> :
          <Input
            onValueChange={this.onValueUpdate} 
          />
        }
        <Info value={inputText}/>
        <p>{inputText}</p>
        {DATA.map((item, index) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    );
  }
}

export {ReactLifeCycleExperiment};
