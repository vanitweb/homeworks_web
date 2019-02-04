import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    static propTypes = {
        arr : PropTypes.array.isRequired,
        deleteTask : PropTypes.func.isRequired,
        clickDisabled : PropTypes.func.isRequired,
    }
    render() {
        const {arr, deleteTask, clickDisabled} = this.props
        return (
            <div>
                <ul>
                    {arr.map(item => {               
                        return <li key = {item.key}>
                                    <span>{item.value}</span>
                                    <button onClick = {deleteTask}> Delete</button>
                                    <button onClick = {clickDisabled}> Confirm</button>
                                </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;
