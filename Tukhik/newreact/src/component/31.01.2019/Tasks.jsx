import React, { Component } from 'react';

class Tasks extends React.Component {

    isDelate(task, i) {
        this.props.delateTasks(task, i);
    }

    render() {
		const{isComplete, tasks} = this.props;
        return(
            <ul>
                {tasks.map((item,i) => {
                    return (
						<li key={i}>{item}
						<button onClick={() => {this.isDelate(item, i)}} key={i}>Delate</button>
						<button key={i} onClick={isComplete}>Complete</button>
						</li>
					)
                })}
            </ul>
        );
    }
}

export {Tasks};