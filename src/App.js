import React, { useState, useEffect } from 'react';
import { FieldLayout, InformationLayout } from './GameLayout/index';
import s from './styles.module.css';
import store from './store/store';

export const App = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const handleCellClick = (index) => {
		if (state.field[index] || state.isGameEnded) return;
		store.dispatch({ type: 'MAKE_MOVE', index });
	};

	const resetGame = () => {
		store.dispatch({ type: 'RESET_GAME' });
	};

	return (
		<div className={s.game}>
			<InformationLayout
				currentPlayer={state.currentPlayer}
				isGameEnded={state.isGameEnded}
				isDraw={state.isDraw}
			/>
			<FieldLayout field={state.field} onCellClick={handleCellClick} />
			{state.isDraw || state.isGameEnded ? (
				<button className={s.resetButton} onClick={resetGame}>
					Начать заново
				</button>
			) : null}
		</div>
	);
};
