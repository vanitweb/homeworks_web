import React, {Component} from "react";
import "./App.css";

class Button extends Component {
	render() {
		const {addToInput } = this.props;
		return(
			<button	className="button"  onClick={addToInput}>
			{this.props.children}
			</button>
		);
	}
}
export {Button};

