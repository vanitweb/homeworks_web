import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        inputVal : "",
        count : "",
    }
    fun = (text, inputVal, count) => {
        if(inputVal === ""){
            return;
        }
        let index = text.indexOf(inputVal);
        if(index !== -1){
            count++;
            this.setState({count:count})
            return this.fun(text.slice(index + inputVal.length), inputVal, count)
        }else{
            this.setState({count:count})
            return console.log(count);
        }
    }
    search = () => {
        const text = document.getElementsByTagName("p")[0].textContent;
        const inputVal = document.getElementsByTagName("input")[0].value;
        this.setState({inputVal : inputVal})
        let count = 0;
        this.fun(text, inputVal, count)
    }

    render() {
        return (
            <div>
                <input />
                <button onClick = {this.search}>search</button>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>{this.state.inputVal}- {this.state.count} angam krknvec</p>
            </div>
        );
    }
}
export default App;
