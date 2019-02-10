import React, { Component } from "react";
import "./App.css";
import {Button} from "./Button";
import {Input } from "./Input";
import {Clear} from "./Clear";
import {Operation} from "./Operation";
import {Equal} from "./Equal";

class App extends Component {

	state = {
		value : "",
		number : "",
		operator : "",
        result : ""
	}
	
	addToInput = (event) => {
		let num = Number(event.target.textContent);
		this.setState({value : num});
	}
	
	makeFromInput = (event) => {
		let num = event.target.value;
		this.setState({value : num});
	}
	
	numOperation = (event) => {
		this.setState({
            operator : event.target.textContent,
            number : this.state.value,
            value : "",
        });
	}
    isEqual = () => {
        let operator = this.state.operator;
        let  result = 0;
        switch(operator){
            case "+":
                    result = this.state.value + this.state.number;
                    this.setState({
                        res : result,
                    });
                break;
            case "-":
                    result = this.state.number - this.state.value;
                        this.setState({
                            res : result,
                        });
                break;
            case "*":
                    result = this.state.number * this.state.value;
                        this.setState({
                            res : result,
                        });
                break;
            case "/":
                    result = this.state.number / this.state.value;
                        this.setState({
                            res : result,
                        });
                break;
            default:
                break;   
        }
        this.setState({
            value : result
        })
    }
	
	
	render() {
		const{value} = this.state;
		return (
			<div className="app">
				<div className="calc">
					
					<Input makeFromInput={this.makeFromInput} value={value} />

					<div className="row">
						<Button addToInput={this.addToInput}>7</Button>
						<Button addToInput={this.addToInput}>8</Button>
						<Button addToInput={this.addToInput}>9</Button>
						<Operation numOperation={this.numOperation}>/</Operation>
					</div>
					<div className="row">
						<Button addToInput={this.addToInput}>4</Button>
						<Button addToInput={this.addToInput}>5</Button>
						<Button addToInput={this.addToInput}>6</Button>
						<Operation numOperation={this.numOperation}>*</Operation>
					</div>
					<div className="row">
						<Button addToInput={this.addToInput}>1</Button>
						<Button addToInput={this.addToInput}>2</Button>
						<Button addToInput={this.addToInput}>3</Button>
						<Operation numOperation={this.numOperation}>+</Operation>
					</div>
					<div className="row">
						<Button addToInput={this.addToInput}>.</Button>
						<Button addToInput={this.addToInput}>0</Button>
						<Equal isEqual={this.isEqual}>=</Equal>
						<Operation numOperation={this.numOperation}>-</Operation>
					</div>
					<div className="row">
						<Clear
							Clear={() => this.setState({value: "" })}>
							Clear
						</Clear>
						
					</div>

				</div>
			</div>
		);
	}
}

export default App;