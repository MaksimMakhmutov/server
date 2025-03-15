import React from 'react';
import s from './styels.module.css';
import { store } from '../../store/store';

export const InformationLayout = () => {
	const state = store.getState();

	return (
		<div className={s.info}>
			{state.isDraw
				? 'Ничья'
				: state.isGameEnded
					? `Победа ${state.currentPlayer}`
					: `Ход ${state.currentPlayer}`}
		</div>
	);
};
