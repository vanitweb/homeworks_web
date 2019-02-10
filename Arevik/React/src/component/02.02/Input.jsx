import React, {Component} from "react";
import "./App.css";

class Input extends Component{
		
	render() {
		const{ value, makeFromInput} = this.props;
			return(
			<div className="input" onChange={makeFromInput}>{value}</div>
		);
	}

} 
export {Input};