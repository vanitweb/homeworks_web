import React, { Component } from 'react';

class Lesson1 extends Component {

  state = {
      data: null,
      timeUpdate: 'Stop',
      value:30
    }
componentWillUnMount(){
console.log("componentWillUnMount");
clearInterval(this.interval);
}

componentDidUpdate(){
  console.log("componentDidUpdate");

}
  componentDidMount (){
    console.log("componentDidMount");
    this.timeUpdate2();
  }

timeUpdate2(){
     this.interval = setInterval(() => {
      this.setState({
        data: new Date().toLocaleString(),
      })
    }, 1000)
}

  render() {
    
    const {timeUpdate} = this.state;
    return(
      <div>
      {this.state.data}
      <button>{timeUpdate}</button>
    </div>
    )
  }
}

export default Lesson1;