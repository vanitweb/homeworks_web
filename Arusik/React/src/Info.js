import React, { Component } from 'react';
class Info extends Component {
	render() {
        const {value} = this.props;
        return (
        <p>{value}</p>
        );
    }
}

export {Info};