import React from 'react';

import './Canban.css';
import CanbanItem from './CanbanItem/CanbanItem';

const Canban = (props) => {
	let canbanItemsData = props.canbanPage.canbanItems;
	let canbanItemsElements = canbanItemsData.map( (canbanItem) => {
		let canbanItemId = canbanItem.id;
		let canbanItemTitle = canbanItem.title;
		let taskData = canbanItem.taskData;
		return (
			<div className="CanbanItem-wrapper" key={canbanItemId}>
				<CanbanItem 
					dispatch={props.dispatch} 
					newTaskText={props.canbanPage.newTaskText} 
					taskData={taskData} 
					title={canbanItemTitle} 
					dataID={canbanItemId}>
				</CanbanItem>
			</div>
		);
	});
	return (
		<div className="Canban">
			{canbanItemsElements}
		</div>
	);
}

export default Canban;