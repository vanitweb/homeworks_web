import React, { Component } from 'react';


class Info extends Component{
	render() {
		return (
			<div>
				{this.props.items.map((item) =>
					<p style={{fontSize: 25 + 'px'}}>{item.name} {item.surname} {item.age}</p>
				)}
			</div>
		);
	}
}

export default Info;