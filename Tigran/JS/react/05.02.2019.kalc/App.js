import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		input : "",
		tiv1 : "",
		nshan : "",
        hav : "",
	}
	tivVercnel = (event) => {
		let tiv = event.target.value * 1;
		this.setState({input : tiv});
	}
	tivVercnelKnopkic = (event) => {
		let tiv = (this.state.input + event.target.textContent) * 1;
		this.setState({input : tiv});
	}
	nshan = (event) => {
		this.setState({
            nshan : event.target.textContent,
            tiv1 : this.state.input,
            input : "",
        });
	}
    havasar = () => {
        let nshan = this.state.nshan;
        let havasar = 0;
        switch(nshan){
            case "+":
                    havasar = this.state.input + this.state.tiv1;
                    this.setState({
                        hav : havasar,
                    });
                break;
            case "-":
                    havasar = this.state.tiv1 - this.state.input;
                        this.setState({
                            hav : havasar,
                        });
                break;
            case "*":
                    havasar = this.state.tiv1 * this.state.input;
                        this.setState({
                            hav : havasar,
                        });
                break;
            case "/":
                    havasar = this.state.tiv1 / this.state.input;
                        this.setState({
                            hav : havasar,
                        });
                break;
            default:
                return    
        }
        this.setState({
            input : havasar,
        })
    }
    del = () => {
        let tiv = this.state.input;
        tiv = tiv.toString();
        tiv = tiv.slice(0,tiv.length-1)*1;
        this.setState({
            input : tiv,
        })
    }
    deleteAll = () => {
        this.setState({
            input : "",
            tiv1 : "",
            nshan : "",
            hav : "",
        })
    }
  render() {
    return (
		<div>
			<input type="number" onChange={this.tivVercnel} value={this.state.input}/>
			<div>
                <p>
    				<button onClick={this.deleteAll}>Ac</button>
                    <button onClick={this.nshan}>/</button>
    				<button onClick={this.nshan}>*</button>
                    <button onClick={this.del}>Del</button>
				</p>	
				<p>	
    				<button onClick={this.nshan}>-</button>
    				<button onClick={this.nshan}>+</button> 
                    <button onClick={this.havasar}>===</button>
                    <button onClick={this.tivVercnelKnopkic}>0</button>
                </p>
                <p>
    				<button onClick={this.tivVercnelKnopkic}>1</button>
                    <button onClick={this.tivVercnelKnopkic}>2</button>
    				<button onClick={this.tivVercnelKnopkic}>3</button>
                    <button onClick={this.tivVercnelKnopkic}>4</button>
                </p>
                <p>
    				<button onClick={this.tivVercnelKnopkic}>5</button>
                    <button onClick={this.tivVercnelKnopkic}>6</button>
    				<button onClick={this.tivVercnelKnopkic}>7</button>
                    <button onClick={this.tivVercnelKnopkic}>8</button>
                </p>
                <p>
			     	<button onClick={this.tivVercnelKnopkic}>9</button> 
				</p>

			</div>
		</div>
    );
  }
}
export default App;