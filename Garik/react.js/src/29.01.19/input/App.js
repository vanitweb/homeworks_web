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
//export default App;
//var x = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
//let count = 0;
//var y = 't';
//function fun(text){
//	let z = text.indexOf(y);
//  	if(z !== -1){
//      	count++;
//    	return fun(text.slice(z + y.length))
//    }else{
//    	return console.log(count);
//    }
//}
//fun(x)