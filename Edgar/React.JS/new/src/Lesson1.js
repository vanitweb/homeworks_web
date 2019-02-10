import React, { Component } from 'react';
import {StopTime} from './Components/StopTime';


class Lesson1 extends Component {
  state = {
      stopTimer: true
    }
 

  render() {
      const{stopTimer}= this.state;
    return(
    <div>
     <StopTime/>
    </div>
    )
  }
}

export default Lesson1;