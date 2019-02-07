import React, {Component} from "react";
import "./App.css";

class Operation extends Component {
	render() {
		const {numOperation} = this.props;
		return(
			<button	className="button" onClick={numOperation}>
			{this.props.children}
			</button>
		);
	}
}
export {Operation};