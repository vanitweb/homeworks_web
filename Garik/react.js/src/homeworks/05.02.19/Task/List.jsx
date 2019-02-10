import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    static propTypes = {
        deleteTask : PropTypes.func.isRequired,
        clickDisabled : PropTypes.func.isRequired,
        item : PropTypes.object.isRequired,
    }
    render() {
        const {item, deleteTask, clickDisabled} = this.props;
        const disabledTrue = <div>
                                <button onClick = {deleteTask} disabled> Delete</button>
                                <button onClick = {clickDisabled} disabled> Confirm</button>
                            </div>;
        const disabledFalse = <div>
                                <button onClick = {deleteTask}> Delete</button>
                                <button onClick = {clickDisabled}> Confirm</button>
                            </div>
        return (
            <div>
                    {item.value}
                    {(item.disabled)?disabledTrue:disabledFalse}
            </div>
        );
    }
}

export default List;