import React, {Component} from 'react';

class Input extends Component {
  render() {
    return (
      <div className='App'>
        <button onClick={this.props.onClick}>{this.props.value.anun1}</button>
        <button onClick={this.props.onClick}>{this.props.value.anun2}</button>
        <button onClick={this.props.onClick}>{this.props.value.anun3}</button>
      </div>
    );
  }
}

export default Input;
