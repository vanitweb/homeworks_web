import React, {Component} from 'react';

class Display extends Component {
  render() {
  	const stil = {
  		height: '50px',
  		width: '200px',
  		backgroundColor: 'aqua',
  		fontSize: '40px'
  	}
    return <h1 style={stil} >{this.props.val}</h1>
  }
}


export default Display;
