import React, { Component } from 'react';

class Info extends Component {
	render() {
	  
	return (
		<div>
			<p>{this.props.value}</p>
			{
				(this.props.value === "Button1") && <div><h2>BUTTON1</h2><p>This is button1</p><img src="./1.jpg"/></div>
			}
			{
				(this.props.value === "Button2") && <div><h3>BUTTON2</h3><p>This is button2</p><img src="./2.jpg"/></div>
			}
			{
				(this.props.value === "Button3") && <div><h2>BUTTON3</h2><h2>This is button3</h2><img src="./3.jpg"/></div>
			}
		</div>
	)
  }
}

export {Info};

