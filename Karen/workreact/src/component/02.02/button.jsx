import React,{Component} from 'react';

class Button extends Component {
  render() {
    const styl = {
      color: 'red',
      height: '50px',
      width: '50px',
      borderRadius: '5px',
      fontSize: '25px'
    }
    return (
      <table>
        <tr>
          <button onClick={this.props.gortoxutyun} style={styl}>MR</button>
          <button onClick={this.props.gortoxutyun} style={styl}>M+</button>
          <button onClick={this.props.gortoxutyun} style={styl}>M-</button>
          <button onClick={this.props.gortoxutyun} style={styl}>x2</button>
        </tr>
        <tr>
          <button onClick={this.props.onClick} style={styl}>1</button>
          <button onClick={this.props.onClick} style={styl}>2</button>
          <button onClick={this.props.onClick} style={styl}>3</button>
          <button onClick={this.props.gortoxutyun} style={styl}>*</button>
        </tr>
        <tr>
          <button onClick={this.props.onClick} style={styl}>4</button>
          <button onClick={this.props.onClick} style={styl}>5</button>
          <button onClick={this.props.onClick} style={styl}>6</button>
          <button onClick={this.props.gortoxutyun} style={styl}>/</button>
        </tr>
        <tr>
          <button onClick={this.props.onClick} style={styl}>7</button>
          <button onClick={this.props.onClick} style={styl}>8</button>
          <button onClick={this.props.onClick} style={styl}>9</button>
          <button onClick={this.props.gortoxutyun} style={styl}>-</button>
        </tr>
        <tr>
          <button onClick={this.props.onClick} style={styl}>0</button>
          <button onClick={this.props.cl} style={styl}>C</button>
          <button onClick={this.props.gortoxutyun} style={styl}>=</button>
          <button onClick={this.props.gortoxutyun} style={styl}>+</button>
        </tr>
      </table>
    )
  }
}

export default Button;