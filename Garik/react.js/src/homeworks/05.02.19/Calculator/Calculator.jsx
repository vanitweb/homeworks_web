import React, { Component } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';

class Form extends Component {
    static propTypes = {
        number : PropTypes.func.isRequired,
        ac : PropTypes.func.isRequired,
        gorcoxutyun : PropTypes.func.isRequired,
        ChangeInput : PropTypes.func.isRequired,
        result : PropTypes.func.isRequired,
        del : PropTypes.func.isRequired,
        inputValue : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }
    render() {
        const {number, ac, gorcoxutyun, inputValue,
               ChangeInput, result, del} = this.props;
        return (
            <div>
                <Input 
                    inputValue = {inputValue}
                    ChangeInput = {ChangeInput}
                    />
                <p>
                    <button onClick = {ac}>AC</button>
                    <button onClick = {gorcoxutyun}>/</button>
                    <button onClick = {gorcoxutyun}>x</button>
                    <button onClick = {del}>←</button>
                </p>
                <p>
                    <button onClick = {number}>7</button>
                    <button onClick = {number}>8</button>
                    <button onClick = {number}>9</button>
                    <button onClick = {gorcoxutyun}>√</button>
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
                    <button onClick = {number}>.</button>
                    <button onClick = {result} className = "result">=</button>
                </p>
            </div>
        );
    }
}

export default Form;