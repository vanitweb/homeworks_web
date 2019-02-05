import React, { Component } from 'react';

class App extends Component {
	
      constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString()
        };
		console.log('constructor');
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
		console.log('componentDidMount');
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
		console.log('componentWillUnmount');
      }
      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
		console.log('tick');
		console.log('tick');
      }
      render() {
        return (
          <p className="App-clock">
            The time is {this.state.time}
			console.log('render')
          </p>
	
        )
		
      }

    }
 


export default App; 