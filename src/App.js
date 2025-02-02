import React from 'react';
import { FieldLayout, InformationLayout } from './GameLayout/index';
import s from './styles.module.css';

import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
	return <Game />;
};

const Game = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const handleCellClick = (index) => {
		if (state.field[index] || state.isGameEnded) return;
		dispatch({ type: 'MAKE_MOVE', index });
	};

	const resetGame = () => {
		dispatch({ type: 'RESET_GAME' });
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
