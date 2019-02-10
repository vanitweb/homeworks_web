import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hours extends Component {
    static propTypes = {
        timeChange : PropTypes.func.isRequired,
        inputValue : PropTypes.number.isRequired,
    }
    render() {
        const {timeChange, inputValue} = this.props;
        return (
            <>
                <input
                    type = "number" 
                    min = "0"
                    max = "24" 
                    value = {inputValue}
                    onChange = {timeChange}
                    name = "hours"
                    />
            </>
        );
    }
}

export default Hours;