import React, { Component } from 'react';


class StopTime extends Component {
	state = {
      data: null,
      stopTime:'Stop Time' 
    }
  componentDidUpdate(){
  console.log("componentDidUpdate");
}

  componentDidMount (){
    console.log("componentDidMount");
   this.interval = setInterval(() => {
     this.setState({
        data: new Date().toLocaleString(),
      })
    }, 1000)
  }
componentWillUnMount(){
console.log("componentWillUnMount");
clearInterval(this.interval);
}
 stopTimer(){
 clearInterval(this.interval);
 console.log("this");
  }
	render() {
    const {data} = this.state;
    const {timer} = this.props;
    const {stopTime} = this.state;
    return (
      <div className="STime">
      <p>{data}</p>
      <button onClick={this.stopTimer}>{stopTime}</button>
      </div>
    )
  }
}


export {StopTime};