import React, {Component, Fragment} from 'react';
import {observer} from 'mobx-react';


@observer
class Task extends Component {
	
	render() {
		const{taskList, delateTask}=this.props;
		return (
			<Fragment>
				<ul>
					{taskList.map((item) => {
						return(
						<li key={taskList.indexOf(item)}>
							<input value={item[0]} />
							<button><b>{item[1]}</b></button>
							<button
								onClick={delateTask} 
								value = {taskList.indexOf(item)}>
								<b>Հեռացնել առաջադրանքը</b>
							</button>
						</li>
					)})}
				</ul>
			</Fragment>
		);	
	}
}
export {Task};