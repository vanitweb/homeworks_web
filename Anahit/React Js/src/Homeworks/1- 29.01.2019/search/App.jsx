import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        inputVal : "",
        count : "",
    }
    searchClick = () => {
         let count = 0;
         const text = document.getElementsByTagName("p")[0].textContent;
         const inputVal = document.getElementsByTagName("input")[0].value;
         const valLen = inputVal.length;
         for(let i = 0; i < text.length; ++i){
             if((text[i] === inputVal[0] && valLen === 0) ||  
                (text[i] === inputVal[0] && (valLen > 0) && (inputVal === text.substr(i,valLen)))) {
                 count++; 
             }
         }
         this.setState({count:count});
    }
    render() {
        return (
            <div>
                <input />
                <button onClick = {this.searchClick}> Search </button>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>{this.state.inputVal}- {this.state.count} angam krknvec</p>
            </div>
        );
    }
}
export default App;
