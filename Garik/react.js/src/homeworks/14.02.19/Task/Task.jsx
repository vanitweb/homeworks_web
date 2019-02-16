import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
class Task extends Component {
    static propTypes = {
        deleteTask : PropTypes.func.isRequired,
        clickDisabled : PropTypes.func.isRequired,
        item : PropTypes.object.isRequired,
        index : PropTypes.number.isRequired,
    }
    render() {
        const {item, deleteTask, clickDisabled, index} = this.props;
        const disabledTrue = <div data-index = {index}>
                                <button onClick = {deleteTask} disabled> Delete</button>
                                <button onClick = {clickDisabled} disabled> Confirm</button>
                            </div>;
        const disabledFalse = <div data-index = {index}>
                                <button onClick = {deleteTask}> Delete</button>
                                <button onClick = {clickDisabled}> Confirm</button>
                            </div>
        return (
            <>
            <td>
                {item.valueName}
            </td>
            <td>
                {item.valueStartDate}
            </td>
            <td>
                {item.valueEndDate}
            </td>
            <td></td>
            <td>
                {(item.disabled)?disabledTrue:disabledFalse}
            </td>
            <td>
                {item.day}
            </td>
            </>
        );
    }
}

export default Task;