import React,{Component} from 'react';

class Button extends Component {
  render() {
    const styl = {
      color: 'red',
      height: '50px',
      width: '50px',
      borderRadius: '5px',
      fontSize: '30px'
    }
    return (
      <button onClick={this.props.onClick} value={this.props.val} style={styl}>
        {this.props.val}
      </button>
    )
  }
}

export default Button;