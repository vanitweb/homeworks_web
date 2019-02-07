import React, {Component} from "react";
import "./App.css";

class Clear extends Component {
	render() {
		return(
			<button className="clear" onClick={this.props.Clear}>
			{this.props.children}
			</button>
		);
	}
};
export {Clear};
