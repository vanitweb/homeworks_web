import React, { Component } from 'react';
import './App.css';

class Lesson1 extends Component {
 state = {
    date: ''
  };
componentDidMount() {
  setInterval(this.setState({date: new Date().toLocaleString()}),1000)
}

  render() {
	  const {date} = this.state;
    return (
      <div class="date">
		
        <h1> ddd {date}</h1>
      </div>
    );
  }
}

export default Lesson1;