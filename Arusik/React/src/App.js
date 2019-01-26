import React, { Component } from 'react';
import './App';

class App extends Component {

  state = {name: 'moon'}
  render() {
    return (
      <form>
      <textarea valus = {this.state.text} OnChange = {this.handleText}></textarea>
      </form>
    );
  }
}

export default App;
