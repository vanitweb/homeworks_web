import React, { Component } from 'react';



class Input1 extends Component {
  render() {
    return (
      <input type="text" onChange={this.props.grac} />
    );
  }
}

export {Input1};