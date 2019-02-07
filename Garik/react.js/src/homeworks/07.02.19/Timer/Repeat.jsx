import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Repeat extends Component {
    static propTypes = {
        repeat : PropTypes.func.isRequired,
    }
    render() {
        const {repeat} = this.props;
        return (
            <>
                <button onClick = {repeat}>Repeat</button>
            </>
        );
    }
}

export default Repeat;