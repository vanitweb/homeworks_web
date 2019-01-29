import React, { Component } from 'react';

class MyButtons extends Component {
	
  render() {
	  const {onChange} = this.props;
        return (
            <div>
                  <button onClick={onChange} name = "btn1">Click me</button>
                  <button onClick={onChange} name = "btn2">Click me</button>
                  <button onClick={onChange} name = "btn3">Click me</button>
            </div>
        );
  }
}

export {MyButtons};