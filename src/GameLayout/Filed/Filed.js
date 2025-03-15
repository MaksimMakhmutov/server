import React from 'react';
import s from './styels.module.css';
import { store } from '../../store/store';

export const FieldLayout = () => {
	const state = store.getState();
	const handleCellClick = (index) => {
		if (state.field[index] || state.isGameEnded) return;
		store.dispatch({ type: 'MAKE_MOVE', index });
	};

	return (
		<div className={s.field}>
			{state.field.map((cell, index) => (
				<button
					className={s.btn}
					key={index}
					onClick={() => handleCellClick(index)}
				>
					{cell}
				</button>
			))}
		</div>
	);
};
