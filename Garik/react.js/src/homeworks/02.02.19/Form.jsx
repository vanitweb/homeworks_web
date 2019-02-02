import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    static propTypes = {
        changeValue : PropTypes.func.isRequired,
        clickTask : PropTypes.func.isRequired,
        inputValue : PropTypes.string.isRequired,
    }
    render() {
        const {changeValue, inputValue, clickTask} = this.props;
        return (
            <div>
                <input onChange = {changeValue} value = {inputValue}/>
                <button onClick = {clickTask}>add task</button>
            </div>
        );
    }
}

export default Form;
