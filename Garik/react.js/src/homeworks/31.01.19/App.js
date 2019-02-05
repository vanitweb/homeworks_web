import React, { Component } from 'react';
import './App.css';
import Div from './Div'
import But from './But'
import Text from './Text'

class App extends Component {
    butClick = (event) => {
        let butText = event.target.textContent;
        this.setState({butVal : butText})
        switch(butText){
            case "but1":
                this.setState({text : "text1"})
                break;
            case "but2":
                this.setState({text : "text2"})
                break;
            case "but3":
                this.setState({text : "text3"})
                break;
            default:
                return;
        }
    }
    state = {
        butVal : "",
        text : "",
    }
    render() {
        const {butVal, text} = this.state;
        return (
            <div className="App">
                <But butClick = {this.butClick}/>
                <Div val = {butVal}/>
                <Text text = {text}/>
            </div>
        );
    }
}

export default App;
