import React from 'react';

import './Canban.css';
import CanbanItem from './CanbanItem/CanbanItem';

const Canban = () => {
	let taskUrls = {
		0:"task1",
		1:"task2",
		2:"task3"
	};
	return (
		<div className="Canban">
			<CanbanItem taskUrls={taskUrls} taskTitles="" title="Canban Item Title"/>
			<CanbanItem title="Canban Item Title"/>
			<CanbanItem title="Canban Item Title"/>
		</div>
	);
}

export default Canban;