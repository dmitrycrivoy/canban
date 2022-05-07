import React from 'react';
import { NavLink } from 'react-router-dom';
import { addTaskActionCreator, updateTaskTextActionCreator } from 'redux/state';
import s from './CanbanItem.module.css';
import CanbanItemTask from './CanbanItemTask/CanbanItemTask';


const CanbanItem = (props) => {
	let isActiveLink = () => {
		return ({isActive}) => isActive ? s.active : "";
	};

	let footer = React.createRef();
	let newTaskTextarea = React.createRef();

	let addTask = () => {
		let newTaskID = footer.current.parentElement.children[1].childElementCount + 1;
		let canbanItemID = footer.current.parentElement.dataset.id;
		if (canbanItemID) {
			let action = addTaskActionCreator(newTaskID, canbanItemID);
			props.dispatch(action);
		}
	};
	let updateTaskText = () => {
		let newTaskText = newTaskTextarea.current.value;
		let action = updateTaskTextActionCreator(newTaskText);
		props.dispatch(action);
	}

	let newTaskText = props.newTaskText;
	let taskData = props.taskData;
	let canbanItemTasks = [];
	if (taskData) {
		taskData.forEach(el => {
			canbanItemTasks.push(
				<NavLink to={el.url} className={isActiveLink()} key={el.id}>
					<CanbanItemTask title={el.title}/>
				</NavLink>
			);
		});
	}
	else {
		canbanItemTasks.push(
			"No tasks"
		);
	}
	return (
		<div className={s.item} data-id={props.dataID - 1}>
			<div className={s.title}>
				{props.title}
			</div>
			<div className={s.content}>
				{canbanItemTasks}
			</div>
			<div 
				ref={footer} 
				onClick={addTask} 
				className={s.footer}>
				+ Add Task
			</div>
			<textarea 
				onChange={updateTaskText} 
				className={s.newTaskText} 
				value={newTaskText} 
				ref={newTaskTextarea}
				name="" 
				id={`${props.dataID - 1}`} >
			</textarea>
		</div>
	);
}

export default CanbanItem;