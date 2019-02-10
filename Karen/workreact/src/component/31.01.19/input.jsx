import React, {Component} from 'react';

class Input extends Component {
  render() {
    return (
      <div className='App'>
      	<input value={this.props.val} onChange={this.props.onC}></input>
        <button onClick={this.props.dnox}>alo</button>
      </div>
    );
  }
}

export default Input;
