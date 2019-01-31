import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Div from './Div';

class App extends Component {
    state = {
        text : "",
        textJnjel : "", 
    }
    onValueChange = (e) =>{
        let stateText = this.state.text;
        let inputVal = e.target.value;
        this.setState({text : stateText += inputVal[inputVal.length - 1]})
    }
    ClickValue = () =>{
        document.getElementsByTagName("input")[0].value = "";
    }
    render() {
        const {text} = this.state;
        return (
            <div>
                <Input change = {this.onValueChange} ClickValue = {this.ClickValue}/>
                <Div text = {text}/>
            </div>
        );
    }
}
export default App;
