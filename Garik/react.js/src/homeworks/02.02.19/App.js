//butonin sexmelis inputi mejin@ textov beri u 2 buton voroncic mekin sexmelis jnjuma text@ myusin sexmelis chi toxum jnjel
import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

class App extends Component {
    state = {
        inputValue : "",
        arr : [],
    }
    changeValue = (event) =>{
        this.setState({inputValue : event.target.value});
    }
    clickTask = (event) =>{
        let arr = [...this.state.arr];
        for(let i in arr){
            if(arr[i].value === this.state.inputValue){
                return alert(`${this.state.inputValue} - task arden ka`);
            }    
        }
        this.setState({
            arr: [...this.state.arr, {value: this.state.inputValue, key: new Date()}],
            inputValue : "",
            
        });
    }
    deleteTask = (event) => {
        let arr = [...this.state.arr];
        for(let i in arr){
            if(arr[i].value === event.target.previousElementSibling.textContent){
                arr.splice(i,1);
            }
        }
        this.setState({arr : arr});
        event.target.parentElement.style.display = "none";
    }
    clickDisabled = (event) => {
        event.target.setAttribute("disabled", "")
        event.target.previousElementSibling.setAttribute("disabled", "")
    }
    render() {
        return (
            <div className="App">
                <Form 
                    clickTask = {this.clickTask} 
                    changeValue = {this.changeValue} 
                    inputValue = {this.state.inputValue}
                />
                <List 
                    arr = {this.state.arr}
                    deleteTask = {this.deleteTask}
                    clickDisabled = {this.clickDisabled}
                />
            </div>
        );
    }
}

export default App;
