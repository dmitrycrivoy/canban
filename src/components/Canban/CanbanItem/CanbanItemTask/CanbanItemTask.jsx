import React from 'react';
import s from './CanbanItemTask.module.css';

const CanbanItemTask = (props) => {
	return (
		<div className={s.task}>
			{props.title}
		</div>
	);
}

export default CanbanItemTask;