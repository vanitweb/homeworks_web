import React, { Component } from 'react';

class MyButtons extends Component {
	
  render() {
	  const {myFunc} = this.props;
        return (
            <div>
                  <button onClick={myFunc} name = "btn1">Click me</button>
                  <button onClick={myFunc} name = "btn2">Click me</button>
                  <button onClick={myFunc} name = "btn3">Click me</button>
            </div>
        );
  }
}

export {MyButtons};