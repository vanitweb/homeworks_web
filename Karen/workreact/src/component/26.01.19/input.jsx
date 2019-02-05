import React, {Component} from 'react';

class Input extends Component {
  render() {
    return (
      <div className='App'>
        <input value={this.props.value} onChange={this.props.onChange}></input>
        <button onClick={this.props.jnjel}>jnjel</button>
      </div>
    );
  }
}

export default Input;
