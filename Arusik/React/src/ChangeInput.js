import React, { Component } from 'react';



class ChangeInput extends Component {
  constructor(props){
  	super(props)
  	this.handleText = this.handleText.bind(this);
  	this.state = {
  		text: "type here"
  	}
  	
  }
  handleText(event) {
  	this.setState({text: event.target value})
  }
  
}

export default ChangeInput;
