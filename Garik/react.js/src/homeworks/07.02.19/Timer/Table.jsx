import React, { Component } from 'react';
import Seconds from './Seconds';
import Minutes from './Minutes';
import Start from './Start';
import Timer from './Timer';
import Hours from './Hours';
import Repeat from './Repeat';

class Table extends Component {
    state = {
        isTimer : false,
        secondsValue : 0,
        minutesValue : 0,
        hoursValue : 0,
    }
    timeChange = (event) => {
        let inputValue = parseInt(event.target.value);
        switch(event.target.getAttribute("name")){
            case "seconds":
                this.setState({secondsValue : inputValue});
                break;
            case "minutes":
                this.setState({minutesValue : inputValue});
                break;
            case "hours":
                this.setState({hoursValue : inputValue});
                break;
            default:
                return;
        }
        
    }
    start = () =>{
        this.setState({isTimer : true})

    }
    repeat = () => {
        this.setState({
            isTimer : false,
            secondsValue : 0,
            minutesValue : 0,
            hoursValue : 0,
        })
    }
    render() {
        const {secondsValue, isTimer, minutesValue, hoursValue} = this.state;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><h2>Hours</h2></td>
                            <td><h2>Minutes</h2></td>
                            <td><h2>Seconds</h2></td>
                            <td><h2>Start</h2></td>
                            <td><h2>Timer</h2></td>
                            <td><h2>Repeat</h2></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Hours
                                    timeChange = {this.timeChange}
                                    inputValue = {hoursValue}
                                    />
                            </td>
                            <td>
                                <Minutes
                                    timeChange = {this.timeChange}
                                    inputValue = {minutesValue}
                                    />
                            </td>
                            <td>
                                <Seconds
                                    timeChange = {this.timeChange}
                                    inputValue = {secondsValue}
                                    />
                            </td>
                            <td>
                                <Start
                                    start = {this.start}
                                    />
                            </td>
                            <td>
                                {isTimer && <Timer 
                                    secondsValue = {secondsValue}
                                    minutesValue = {minutesValue}
                                    hoursValue = {hoursValue}
                                    />}
                            </td>
                            <td>
                                <Repeat
                                    repeat = {this.repeat}
                                    />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;