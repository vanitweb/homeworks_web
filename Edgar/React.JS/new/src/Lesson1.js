import React, { Component } from 'react';

class Lesson1 extends Component {
  state = {
      data: null
      stopTime: 
    }
componentUnMount(){
clearInterval(this.myinterval);
}
  componentDidMount(){
    console.log("componentDidMount");
    let myinterval =setInterval(() => {
      let myTime = new Date().toLocaleString()
      this.setState({
        data: myTime
      })
    }, 1000)
  }

  render() {
    return(
    <div>
      {this.state.data}
    </div>
    )
  }
}

export default Lesson1;