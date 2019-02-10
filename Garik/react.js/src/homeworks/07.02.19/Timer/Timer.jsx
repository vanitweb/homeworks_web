import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
    state = {
        timeSeconds : this.props.secondsValue,
        timeMinutes : this.props.minutesValue,
        timeHours : this.props.hoursValue,
    }
    static propTypes = {
        secondsValue : PropTypes.number.isRequired,
    }
    componentDidMount(){
        this.TimerInterval = setInterval(this.secondsInterval, 1000)
    }
    secondsInterval = () =>{
        let seconds = this.state.timeSeconds - 1;
        let minutes = this.state.timeMinutes - 1;
        let hours = this.state.timeHours - 1;
        if(this.state.timeSeconds > 0){
            this.setState({timeSeconds : seconds})
        }else if(this.state.timeMinutes > 0){
            this.setState({
                timeMinutes : minutes,
                timeSeconds : 60,
                          })
        }else if(this.state.timeHours > 0){
            this.setState({
                timeHours : hours,
                timeMinutes : 59,
                timeSeconds : 60,
            })
        }else{
            clearInterval(this.TimerInterval)
        }
    }
    shouldComponentUpdate(){
        return this.state.timeSeconds > 0
    }
    render() {
        const {timeSeconds, timeMinutes, timeHours} = this.state;
        return (
            <React.Fragment>
                {timeHours} : {timeMinutes} : {timeSeconds}
            </React.Fragment>
        );
    }
}

export default Timer;