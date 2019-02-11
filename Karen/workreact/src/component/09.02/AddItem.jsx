import React,{Component} from 'react';
import Input from './Input.jsx';
import PropTypes from 'prop-types';
import Button from './Button.jsx';
import {observer} from 'mobx-react';
import {observable, computed, action} from 'mobx';

class AddItem extends Component {
	
	

	


	render() {
		return (
			<>
				<Input onchange={this.props.add} val={this.props.newTaskName}/>
				<Input onchange={this.props.addStart} val={this.props.newTaskStartDate}/>
				<Input onchange={this.props.addEnd} val={this.props.newTaskEndDate}/>
				<Button addTask={this.props.addTask}/>
      		</>
    	);
	}
}

export default AddItem;