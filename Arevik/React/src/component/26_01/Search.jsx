import React, { Component } from 'react';

class Search extends Component {
	render() {
		const {value2, count, myText, findCount} = this.props;
		console.log(this.props);
		return(
			<div>
				<form >
					<input
						type="text"
						placeholder="Insert symbol"
						value={value2}
						onChange={findCount}
					/>
					<h1>{count}</h1>
				</form>
				<p>{myText}</p>
			</div>	
		);
	}
}
export {Search};