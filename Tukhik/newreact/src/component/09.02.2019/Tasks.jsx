import React, { Component } from 'react';
import  { observable, computed, action } from 'mobx';
import  { observer } from 'mobx-react';



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
                        <div> </div>
						<button onClick={() => {this.isDelate(item, i)}} key={i}>Delate</button>
						<button key={i} onClick={isComplete}>Complete</button>
                        <span> Skzbnakan jam </span><input type="date" value="2013-01-08" />
                        <span> Avarti jam </span><input type="date" value="2013-01-08" />
                        <div> </div>
						</li>
					)
                })}
            </ul>
        );
    }
}

export {Tasks};