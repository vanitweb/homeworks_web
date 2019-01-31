import React, { Component } from 'react';

class Info extends Component {
  render() {
	  
	if(this.props.value === "Button1")
	{
		var value1 = true;
	}
	if(this.props.value === "Button2")
	{
		var value2 = true;
	}
	if(this.props.value === "Button3")
	{
		var value3 = true;
	}
    return (
		<div>
			<p>{this.props.value}</p>
				{
					value1 && <div><h2>BUTTON1</h2><p>This is button1</p><img src="./1.jpg"/></div>
				}
				{
					value2 && <div><h3>BUTTON2</h3><p>This is button2</p><img src="./2.jpg"/></div>
				}
				{
					value3 && <div><h2>BUTTON3</h2><h2>This is button3</h2><img src="./3.jpg"/></div>
				}
				
		</div>
	)
  }
}

export {Info};

