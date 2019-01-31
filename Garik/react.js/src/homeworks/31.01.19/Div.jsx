import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Div extends Component {
    static propTypes= {
        val : PropTypes.string.isRequired,
    }
    render() {
        const {val} = this.props;
        return (
            <p>{val}</p>
        );
    }
}

export default Div;
