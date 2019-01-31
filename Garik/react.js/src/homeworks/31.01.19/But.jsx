import React, { Component } from 'react';
import PropTypes from 'prop-types';

class But extends Component {
    static propTypes= {
        butClick : PropTypes.func.isRequired,
    }
    render() {
        const {butClick} = this.props;
        const button1 = <button onClick = {butClick}>but1</button>;
        const button2 = <button onClick = {butClick}>but2</button>;
        const button3 = <button onClick = {butClick}>but3</button>;
        return (
            <div>
                {button1}
                {button2}
                {button3}
            </div>
        );
    }
}

export default But;
