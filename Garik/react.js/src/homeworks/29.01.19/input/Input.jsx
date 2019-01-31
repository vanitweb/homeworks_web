import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <input onChange = {this.props.change}/>
                <button onClick = {this.props.ClickValue}>Inputi Arjeq jnjel</button>
            </div>
        );
    }
}

export default Input;