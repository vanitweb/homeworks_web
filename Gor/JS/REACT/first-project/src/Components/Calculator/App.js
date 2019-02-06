import React, { Component } from 'react';
import {Result} from './Result';
import {Simvol} from './Simvol';
import {HavasarE} from './HavasarE';
import {Reset} from './Reset';
class App extends Component {
	state = {
		calculateText: "0"
	};
	grel = (e) => {
		const nish = e.target.value;
		let text = this.state.calculateText;
		const len = text.length - 1;
		const lastSimbol = text[len];
		if(text === "0") {
			if(nish !== "/" && nish !== "*" && nish !== "-" && nish !== "+") {
				text = nish;
			}
		} else if((lastSimbol === "/" || lastSimbol === "*" || lastSimbol === "-" || lastSimbol === "+") && (nish === "/" || nish === "*" || nish === "-" || nish === "+")) {
			text = text.slice(0, -1);
			text += nish;
		} else {
			text += nish;
		}
		this.setState({calculateText: text});
	}
	havasar = () => {
		const text = this.state.calculateText;
		const result = eval(text).toString();
		this.setState({calculateText:result});
	}
	reset = () => {
		this.setState({calculateText:"0"});
	}
	render() {
		const {calculateText} = this.state;
    	return (
			<div className="container">
				<Result text={calculateText} />
				<Simvol value='0' grel={this.grel}/>
				<Simvol value='1' grel={this.grel}/>
				<Simvol value='2' grel={this.grel}/>
				<Simvol value='3' grel={this.grel}/>
				<Simvol value='4' grel={this.grel}/>
				<Simvol value='5' grel={this.grel}/>
				<Simvol value='6' grel={this.grel}/>
				<Simvol value='7' grel={this.grel}/>
				<Simvol value='8' grel={this.grel}/>
				<Simvol value='9' grel={this.grel}/>
				<Simvol value='-' grel={this.grel}/>
				<Simvol value='+' grel={this.grel}/>
				<Simvol value='*' grel={this.grel}/>
				<Simvol value='/' grel={this.grel}/>
				<HavasarE value='=' havasar={this.havasar} />
				<Reset value='C' reset={this.reset} />
			</div>
		);
  	}
}

export default App;