import React, { Component } from 'react';
import {Input} from './Input';
import {Info} from './Info';
import {Button} from './Button';
class App extends Component {

<<<<<<< HEAD
    state = {
  	    value: ''
    };
    onValueChange = (event) => {
  	    this.setState({value: event.target.value});
    };
    delInfo = () =>{
        this.setState({value: ''});
    };
    render() {
  	    const {value} = this.state;
        return (
          <div>
      	      <Input value={value} changeText={this.onValueChange} />
      	      <p>{value}</p>
      	      <Info value={value} changeText={this.onValueChange}/>
              <Button del={this.delInfo}>Delete</Button>
          </div>
        );
    }
=======
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
>>>>>>> c495e72ee6a5ce274bd5faf4daaaf90173fb6359
}

export default App;