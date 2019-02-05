import React, { Component } from "react";
import "./App.css";
import { Button } from "./Button";
import { Input } from "./Input";
import {Clear} from "./Clear";
import * as math from "mathjs";

class App extends Component {

	state = {input: ""};

	addToInput = val => {
		this.setState({input: this.state.input + val});
	};

	isEqual = () => {
		this.setState({input: math.eval(this.state.input)});
	};

	render() {
		return (
			<div className="app">
				<div className="calc">
					<Input input={this.state.input} />
					<div className="row">
						<Button onClick={this.addToInput}>7</Button>
						<Button onClick={this.addToInput}>8</Button>
						<Button onClick={this.addToInput}>9</Button>
						<Button onClick={this.addToInput}>/</Button>
					</div>
					<div className="row">
						<Button onClick={this.addToInput}>4</Button>
						<Button onClick={this.addToInput}>5</Button>
						<Button onClick={this.addToInput}>6</Button>
						<Button onClick={this.addToInput}>*</Button>
					</div>
					<div className="row">
						<Button onClick={this.addToInput}>1</Button>
						<Button onClick={this.addToInput}>2</Button>
						<Button onClick={this.addToInput}>3</Button>
						<Button onClick={this.addToInput}>+</Button>
					</div>
					<div className="row">
						<Button onClick={this.addToInput}>.</Button>
						<Button onClick={this.addToInput}>0</Button>
						<Button onClick={() => this.isEqual()}>=</Button>
						<Button onClick={this.addToInput}>-</Button>
					</div>
					<div className="row">
						<Clear
							Clear={() => this.setState({input: "" })}>
							Clear
						</Clear>
					</div>
				</div>
			</div>
		);
	}
}

export default App;