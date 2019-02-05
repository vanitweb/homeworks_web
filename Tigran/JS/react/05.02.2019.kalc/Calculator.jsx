import React, { Component } from 'react';

class Form extends Component {
    render() {
        const {number, gorcoxutyun, x, inputValue, ChangeInput, result} = this.props;
        return (
            <div>
                <input type = "Number" value = {inputValue} onChange = {ChangeInput}></input>
                <p>
                    <button onClick = {x}>AC</button>
                    <button onClick = {gorcoxutyun}>/</button>
                    <button onClick = {gorcoxutyun}>*</button>
                    <button onClick = {x}>del</button>
                </p>
                <p>
                    <button onClick = {number}>7</button>
                    <button onClick = {number}>8</button>
                    <button onClick = {number}>9</button>
                    <button onClick = {gorcoxutyun}>%</button>
                </p>
                <p>
                    <button onClick = {number}>4</button>
                    <button onClick = {number}>5</button>
                    <button onClick = {number}>6</button>
                    <button onClick = {gorcoxutyun}>-</button>
                </p>
                <p>
                    <button onClick = {number}>1</button>
                    <button onClick = {number}>2</button>
                    <button onClick = {number}>3</button>
                    <button onClick = {gorcoxutyun}>+</button>
                </p>
                <p>
                    <button onClick = {number}>0</button>
                    <button onClick = {result}>=</button>
                </p>
            </div>
        );
    }
}

export default Form;