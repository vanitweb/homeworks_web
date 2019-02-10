import React, { Component } from 'react';

class Nshan extends Component {
  render() {
    return (
	<div>
		<input type="button" value={"+"} onClick={this.props.onclick} />
		<input type="button" value={"-"} onClick={this.props.onclick} />
		<input type="button" value={"/"} onClick={this.props.onclick} />
		<input type="button" value={"*"} onClick={this.props.onclick} />
	</div>
	)
  }
}

export {Nshan};