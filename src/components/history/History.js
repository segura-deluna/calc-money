import React from 'react';
import HistoryItem from './HistoryItem';

const History = () => (
	<section className="history">
		<h3>история расходов</h3>
		<ul className="history__list">
			<HistoryItem />
		</ul>
	</section>
);

export default History;
