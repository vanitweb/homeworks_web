import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import {observer} from 'mobx-react';

@observer
class TaskList extends Component {
    static propTypes = {
        arr : PropTypes.array.isRequired,
        filterArr : PropTypes.array.isRequired,
        clickDisabled : PropTypes.func.isRequired,
        deleteTask : PropTypes.func.isRequired,
    }
    render() {
        const {arr, filterArr, clickDisabled, deleteTask} = this.props;
        const mapArr = arr.map((item, index) => {
            return <tr key = {item.key}>
                {<Task
                    clickDisabled = {clickDisabled}
                    deleteTask = {deleteTask}
                    item = {item}
                    index = {index}
                    />}
            </tr>
        });
        const mapArrFilter = filterArr.map((item, index) => {
            return <tr key = {item.key}>
                {<Task
                    clickDisabled = {clickDisabled}
                    deleteTask = {deleteTask}
                    item = {item}
                    index = {index}
                    />}
            </tr>
        });
        return (
            <>
            {(filterArr.length === 0) ? mapArr : mapArrFilter}
            </>
        );
    }
}

export default TaskList;