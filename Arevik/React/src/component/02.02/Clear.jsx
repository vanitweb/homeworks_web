import React from "react";
import "./App.css";

export const Clear = props => (
	<button className="clear" onClick={props.Clear}>
		{props.children}
	</button>
);
