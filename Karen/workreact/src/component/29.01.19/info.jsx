import React,{Component} from 'react';

class Info extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.valu}</p>
      </div>
    );
  }
}

export default Info;
