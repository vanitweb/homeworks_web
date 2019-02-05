import React, { Component } from 'react';

class Tver extends Component {
  render() {
    return (
	<div>
		<input type="button" value={0} onClick={this.props.onclick} />
		<input type="button" value={1} onClick={this.props.onclick} />
		<input type="button" value={2} onClick={this.props.onclick} />
		<input type="button" value={3} onClick={this.props.onclick} />
		<input type="button" value={4} onClick={this.props.onclick} />
		<input type="button" value={5} onClick={this.props.onclick} />
		<input type="button" value={6} onClick={this.props.onclick} />
		<input type="button" value={7} onClick={this.props.onclick} />
		<input type="button" value={8} onClick={this.props.onclick} />
		<input type="button" value={9} onClick={this.props.onclick} />
	</div>
	)
  }
}

export {Tver};