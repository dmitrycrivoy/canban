import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CanbanItem.module.css';
import CanbanItemTask from './CanbanItemTask/CanbanItemTask';

const CanbanItem = (props) => {
	let isActiveLink = () => {
		return ({isActive}) => isActive ? s.active : "";
	};
	let taskUrls = props.taskUrls;
	let canbanItemTasks = [];
	if (taskUrls) {
		let taskUrlsArray = Object.values(taskUrls);
		taskUrlsArray.forEach(element => {
			canbanItemTasks.push(
				<NavLink to={element} className={isActiveLink()} key={element}>
					<CanbanItemTask title="Very Important Task"/>
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
		<div className={s.item}>
			<div className={s.title}>
				{props.title}
			</div>
			<div className={s.content}>
				{canbanItemTasks}
			</div>
		</div>
	);
}

export default CanbanItem;