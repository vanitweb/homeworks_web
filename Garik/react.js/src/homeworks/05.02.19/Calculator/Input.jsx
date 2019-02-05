import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    static propTypes = {
        inputValue : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        ChangeInput : PropTypes.func.isRequired
    }
    render() {
        const {inputValue, ChangeInput} = this.props;
        return (
            <div>
                <input value = {inputValue} onChange = {ChangeInput}></input>
            </div>
        );
    }
}

export default List;