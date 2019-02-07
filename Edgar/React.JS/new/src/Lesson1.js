import React, { Component } from 'react';

class Lesson1 extends Component {

  state = {
      data: null,
      timeUpdate: 'Stop',
      value:30
    }
componentWillUnMount(){
console.log("componentWillUnMount");
if(this.state.value = 0){
clearInterval(this.interval)
  
}
}

  componentDidMount (){
    console.log("componentDidMount");
    this.timeUpdate2();
  }

timeUpdate2(){
     this.interval = setInterval(() => {
      this.setState({
        data: new Date().toLocaleString(),
        value:this.state.value - 1
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