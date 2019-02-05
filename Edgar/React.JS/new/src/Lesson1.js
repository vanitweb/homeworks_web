import React, { Component } from 'react';

class Lesson1 extends Component {

  state = {
      data: null
    }
componentWillMount(){
console.log("componentWillMount");
}
  componentDidMount(){
    console.log("componentDidMount");
    setInterval(() => {
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