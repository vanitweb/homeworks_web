import React from 'react';
import  s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
	
	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
				<NavLink to={path} >{props.name}</NavLink>
		</div>
	)
}

const Massage = (props) => {
return (
	<div className={s.dialog}>
				{props.message}
	</div>
	)
}

const Dialogs = (props) => {


let dialogsEmenets = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
let messagesElements = props.messages.map(m => <Massage message={m.message}/>)
	return (
	<div className={s.dialogs}>
		<div className={s.dialogsItems}>
			 {dialogsEmenets} 
		</div>
		<div className={s.massages}>
			{messagesElements}
		</div>

	</div>
	)
}


export default Dialogs