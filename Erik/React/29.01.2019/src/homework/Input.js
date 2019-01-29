import React, {Component} from 'react';

class Input extends Component {
	
	render(){
		return(
			<div>
				<input  onChange={this.props.poxel}/>
			</div>
		);
	}
}
export {Input};