import React from 'react';

const HistoryItem = () => (
	<li className="history__item history__item-plus">получил зарплату
		<span className="history__money">+30000 ₽</span>
		<button className="history__delete">x</button>
	</li>
);


/*
	<li className="history__item  history__item-minus">
		отдал долг
		<span className="history__money">-10000 ₽</span>
		<button className="history__delete">x</button>
	</li>
*/


export default HistoryItem;
