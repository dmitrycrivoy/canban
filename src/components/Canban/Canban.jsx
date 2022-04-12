import React from 'react';

import './Canban.css';
import CanbanItem from './CanbanItem/CanbanItem';

const Canban = () => {
	return (
		<div className="Canban">
			<CanbanItem title="Canban Item Title"/>
			<CanbanItem title="Canban Item Title"/>
			<CanbanItem title="Canban Item Title"/>
		</div>
	);
}

export default Canban;