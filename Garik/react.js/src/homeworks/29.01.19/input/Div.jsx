import React, { Component } from 'react';
class Div extends Component {
    render() {
        return (
            <div className="App">
                {this.props.text}
            </div>
        );
    }
}

export default Div;