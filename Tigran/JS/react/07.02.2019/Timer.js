import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
	static propTypes= {
		timer: PropTypes.number.isRequired,
	};
	state = {
		timerStart : this.props.timer,
	}

	componentDidMount(){
		this.interval = setInterval(
			() => this.qayl(),
			1000
		);
	}
	qayl(){
		let next = this.state.timerStart-1;
		if (next === 0) {
			clearInterval(this.interval);
		}
		console.log(12);
		this.setState({
			timerStart : next,
		});
	}
	render(){
		return(

			<h1>{this.state.timerStart}</h1>

		);
	}
}
export default Timer;