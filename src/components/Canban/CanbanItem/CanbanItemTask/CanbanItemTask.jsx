import React from 'react';
import s from './CanbanItemTask.module.css';

const CanbanItemTask = (props) => {
	return (
		<div className={s["Canban-item-task"]}>
			{props.title}
		</div>
	);
}

export default CanbanItemTask;