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
        this.setState({
            arr: [...this.state.arr, {
                value: this.state.inputValue,
                key: new Date(),
                delete : true,
                disabled : false,
            }],
            inputValue : "",
        });
    }
    deleteTask = (event) => {
        let arr = [...this.state.arr];
        let index = event.target.parentElement.parentElement.parentElement.getAttribute("data-index");
        arr[index].delete = false;
        arr.splice(index, 1)
        this.setState({arr : arr});
        
    }
    clickDisabled = (event) => {
        let arr = [...this.state.arr];
        let index = event.target.parentElement.parentElement.parentElement.getAttribute("data-index");
        arr[index].disabled = true;
        this.setState({arr : arr});
    }
    render() {
        const mapli = this.state.arr.map((item, index) => {               
                        return <li key = {item.key} data-index = {index}>
                                    {item.delete && <List
                                        clickDisabled = {this.clickDisabled}
                                        deleteTask = {this.deleteTask}
                                        item = {item}
                                    />}
                                </li>
                        });
        const {inputValue} = this.state;
        return (
            <div className="App">
                <Form 
                    clickTask = {this.clickTask} 
                    changeValue = {this.changeValue} 
                    inputValue = {inputValue}
                />

                <ul>
                    {mapli}
                </ul>
            </div>
        );
    }
}

export default App;
