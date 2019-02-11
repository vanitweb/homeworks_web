import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
class Task extends Component {

	
	render() {
		const {taskList} = this.props;
		return (
			<>
				<ul>
					{taskList.map(i => {
						return <li key = {taskList.indexOf(i)}>
									<p>{i[0]}</p>
									<p>{i[2] - i[1]}</p>
									<button onClick = {this.props.jnjel} value = {taskList.indexOf(i)}>Delete</button>
								</li>
					})

					}
				</ul>
			</>
		);	
	}
}

export default Task;