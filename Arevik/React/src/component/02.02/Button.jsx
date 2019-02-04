import React from "react";
import "./App.css";

export const Button = props => (
	<button
		className="button"
		onClick={() => props.onClick(props.children)}
	>
		{props.children}
	</button>
);