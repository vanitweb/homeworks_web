import React, { Component } from 'react';
import './App';

class App extends Component {

  state = {name: 'moon'}
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
=======
      <form>
      <textarea valus = {this.state.text} OnChange = {this.handleText}></textarea>
      </form>
>>>>>>> f90e77683c74f90f2f42ea3042079940f4e4aa16
    );
  }
}

export default App;
