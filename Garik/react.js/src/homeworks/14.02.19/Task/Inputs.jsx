import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
    static propTypes = {
        changeValue : PropTypes.func.isRequired,
        inputValueName : PropTypes.string.isRequired,
        inputValueStartDate : PropTypes.string.isRequired,
        inputValueEndDate : PropTypes.string.isRequired,
    }
    render() {
        const {changeValue, inputValueName, inputValueStartDate, inputValueEndDate} = this.props;
        return (
            <>
            <td>
                <input onChange = {changeValue} value = {inputValueName} placeholder ="New Task Name"/>
            </td>
            <td>
                <input onChange = {changeValue} value = {inputValueStartDate} type = "date" placeholder ="New Task Start Date"/>
            </td>
            <td>
                <input onChange = {changeValue} value = {inputValueEndDate} type = "date" placeholder ="New Task End Date"/>
            </td> 
            </>
        );
    }
}

export default Inputs;