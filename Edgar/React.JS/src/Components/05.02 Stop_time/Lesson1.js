import React, {Component} from 'react';
import {StopTime} from './StopTime';

class Lesson1 extends Component {
    state = {
        stopTimer: true,
    }

    stopTimer = this.stopTimer.bind(this)

    stopTimer() {
        this.setState({
            stopTimer: false
        })
    }

    render() {
        return this.state.stopTimer ? ( 
            <div>
            <StopTime/>
            <button onClick={this.stopTimer}>Stop Time</button>
            </div>) : null
        }
    }

    export default Lesson1;