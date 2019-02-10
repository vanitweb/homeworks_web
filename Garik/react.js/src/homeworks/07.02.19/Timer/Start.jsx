import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Start extends Component {
    static propTypes = {
        start : PropTypes.func.isRequired,
    }
    render() {
        const {start} = this.props;
        return (
            <>
                <button onClick = {start}>Start</button>
            </>
        );
    }
}

export default Start;