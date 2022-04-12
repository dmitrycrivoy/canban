import React from 'react';
import s from './CanbanItem.module.css';
import CanbanItemTask from './CanbanItemTask/CanbanItemTask';

const CanbanItem = (props) => {
	return (
		<div className={s["Canban-item"]}>
			<div className={s["Canban-item-title"]}>
				{props.title}
			</div>
			<div className={s["Canban-item-content"]}>
				<CanbanItemTask title="Very Important Task"/>
				<CanbanItemTask title="Important Task"/>
				<CanbanItemTask title="Task"/>
			</div>
		</div>
	);
}

export default CanbanItem;