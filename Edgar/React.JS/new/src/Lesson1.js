import React, { Component } from 'react';

class Lesson1 extends Component {
  state = {
<<<<<<< HEAD
      data: null
      stopTime: 
    }
componentUnMount(){
clearInterval(this.myinterval);
=======
      data: null,
      timeUpdate: 'Stop',
      value:30
    }
componentWillUnMount(){
console.log("componentWillUnMount");
clearInterval(this.interval);
>>>>>>> 134d8ad0f9af23edfe54f0126254d6ab4459b09e
}

componentDidUpdate(){
  console.log("componentDidUpdate");

}
  componentDidMount (){
    console.log("componentDidMount");
<<<<<<< HEAD
    let myinterval =setInterval(() => {
      let myTime = new Date().toLocaleString()
=======
    this.timeUpdate2();
  }

timeUpdate2(){
     this.interval = setInterval(() => {
>>>>>>> 134d8ad0f9af23edfe54f0126254d6ab4459b09e
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