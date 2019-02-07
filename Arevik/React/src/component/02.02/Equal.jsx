import React, {Component} from "react";
import "./App.css";

class Equal extends Component {
	render() {
		const {isEqual} = this.props;
		return(
			<button	className="button" onClick={isEqual} >
			{this.props.children}
			</button>
		);
	}
}
export {Equal};