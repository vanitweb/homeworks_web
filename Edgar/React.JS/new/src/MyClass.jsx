import React, { Component } from 'react';


class MyClass extends Component {
    onchange = () =>{
        this.props.onchange();
    };
    render() {
        return(
            <div className="App">
                My Component
                {this.props.name}
                <button onClick={this.onchange}>Change Name</button>
            </div>    
    );  
    }
}
export {MyClass};