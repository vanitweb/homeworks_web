import React, { Component } from 'react';
import './App.css';
import AddItem from './AddItem';
import TaskList from './TaskList';
import InputSarch from './InputSarch';
import {observable, computed, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class App extends Component {
    @observable inputValueName = "";
    @observable inputValueStartDate = "";
    @observable inputValueEndDate = "";
    @observable arr = [];
    @observable filterArr = [];

    @action
    changeValue = (event) =>{
        switch(event.target.getAttribute("placeholder")){
            case "New Task Name":
                this.inputValueName = event.target.value;
                break;
            case "New Task Start Date":
                this.inputValueStartDate = event.target.value;
                break;
            case "New Task End Date":
                this.inputValueEndDate = event.target.value;
                break;
            case "Search":
                this.filterArr = this.arr.filter(item => item.valueName.indexOf(event.target.value) !== -1)
                break;
            default:
                return;
        }
    }
    @computed
    get timeLeft(){
            const startdDate = this.inputValueStartDate.split("-")
            const endDate = this.inputValueEndDate.split("-")
            const year = endDate[0] - startdDate[0];
            const month = endDate[1] - startdDate[1];
            const day = endDate[2] - startdDate[2];
            return `${year} - ${month} - ${day}`
    }
    @action
    clickTask = (event) =>{
        this.arr.push({
                valueName: this.inputValueName,
                valueStartDate: this.inputValueStartDate,
                valueEndDate: this.inputValueEndDate,
                day : "0 - 0 - 0",
                key: new Date(),
                delete : true,
                disabled : false,
            });
        if(this.inputValueStartDate !== "" && this.inputValueEndDate !== ""){
            this.arr[this.arr.length - 1].day = this.timeLeft;
        }
        this.inputValueName = "";
        this.inputValueStartDate = "";
        this.inputValueEndDate = "";
    }
    @action
    deleteTask = (event) => {
        let index = event.target.parentElement.getAttribute("data-index");
        this.arr.splice(index, 1)
    }
    @action
    clickDisabled = (event) => {
        let index = event.target.parentElement.getAttribute("data-index");
        this.arr[index].disabled = true;
    }
    render() {
        return (
            <div className="App">
                <table>
                    <thead>
                        <tr>
                            <td>
                                <h2>Name</h2>
                            </td>
                            <td>
                                <h2>Start Date</h2>
                            </td>
                            <td>
                                <h2>End Date</h2>
                            </td>
                            <td>
                                <h2>Add Task</h2>
                            </td>
                            <td>
                                <h2>Action</h2>
                            </td>
                            <td>
                                <h2>Time Left</h2>
                            </td>
                            <td>
                                <h2>Search</h2>
                            </td>
                        </tr>
                        <tr>
                            <AddItem 
                                clickTask = {this.clickTask} 
                                changeValue = {this.changeValue} 
                                inputValueName = {this.inputValueName}
                                inputValueStartDate = {this.inputValueStartDate}
                                inputValueEndDate = {this.inputValueEndDate}
                                />
                            <InputSarch
                                changeValue = {this.changeValue}
                                />
                        </tr>
                    </thead>
                    <tbody>
                        <TaskList 
                            arr = {this.arr}
                            filterArr = {this.filterArr}
                            clickDisabled = {this.clickDisabled}
                            deleteTask = {this.deleteTask}
                            />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
