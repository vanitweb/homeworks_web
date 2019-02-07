import React, {Component, Fragment} from 'react';
import Input from './Input.js';
import Timer from './Timer.js';

class Child extends Component {
  state = {
    time : 0,
    isStart : false,
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  valueVercnel = (event) => {
    this.setState({time : event.target.value*1});
  }
  start = () => {
    this.setState({isStart : true})
  }
  
  render() {
    return (
      <Fragment>
        <Input fun={this.valueVercnel}/>
        <button onClick={this.start}>start</button>
        {this.state.isStart && <Timer timer={this.state.time}/>}
      </Fragment>
    );
  }
}

export default Child;


