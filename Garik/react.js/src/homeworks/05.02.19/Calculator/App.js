import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends Component {
    state = {
        inputValue : "",
        num1 : 0,
        nshan : "",
    }
    number = (event) => {
        const inputVal = this.state.inputValue;
        const eventNum = event.target.textContent;
        this.setState({inputValue : inputVal + eventNum})
    }
    changeInput = (event) => {
        this.setState({inputValue : event.target.value})
    }
    gorcoxutyun = (event) => {
        this.setState({
            num1 : this.state.inputValue,
            inputValue : "",
            nshan : event.target.textContent,
        })
    }
    result = () => {
        let result = 0;
        switch(this.state.nshan){
            case "+":
                result = Number(this.state.num1) + Number(this.state.inputValue);
                break;
            case "-":
                result = Number(this.state.num1) - Number(this.state.inputValue);
                break;     
            case "x":
                result = Number(this.state.num1) * Number(this.state.inputValue);
                break;      
            case "/":
                (Number(this.state.inputValue) === 0)
                    ?result = "tive 0 - i chi bajanvum"
                    :result = Number(this.state.num1) / Number(this.state.inputValue)
                break;        
            case "√":
                result = Math.sqrt(this.state.num1);
                break;
            default:
                return;
        }
        this.setState({inputValue : result})
    }
    ac = () =>{
        this.setState({
            inputValue : "",
            num1 : 0,
            nshan : "",
        })
    }
    del = () =>{
        let inputValue = this.state.inputValue.toString();
        let del = inputValue.slice(0, inputValue.length - 1);
        this.setState({inputValue : del})
    }
    render() {
        const {inputValue} = this.state;
        return (
            <div className="App">
                <Calculator 
                    number = {this.number}
                    ChangeInput = {this.changeInput}
                    gorcoxutyun = {this.gorcoxutyun}
                    result = {this.result}
                    ac = {this.ac}
                    del = {this.del}
                    inputValue = {inputValue}
                />
            </div>
        );
    }
}

export default App;
