import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';

class AddItem extends Component {
    static propTypes = {
        changeValue : PropTypes.func.isRequired,
        clickTask : PropTypes.func.isRequired,
        inputValueName : PropTypes.string.isRequired,
        inputValueStartDate : PropTypes.string.isRequired,
        inputValueEndDate : PropTypes.string.isRequired,
    }
    render() {
        const {changeValue, clickTask, inputValueName, inputValueStartDate,
               inputValueEndDate} = this.props;
        return (
            <>
            <Inputs 
                changeValue = {changeValue}
                inputValueName = {inputValueName}
                inputValueStartDate = {inputValueStartDate}
                inputValueEndDate = {inputValueEndDate}
                />
            <td>
                <button onClick = {clickTask}>add task</button>
            </td>
            <td></td>
            <td></td>
            </>
        );
    }
}

export default AddItem;