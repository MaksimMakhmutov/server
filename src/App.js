import React, { useEffect, useState } from 'react';
import { FieldLayout, InformationLayout } from './GameLayout/index';
import s from './styels.module.css';
import { store } from './store/store';

export const App = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => unsubscribe();
	}, []);

	const resetGame = () => {
		store.dispatch({ type: 'RESET_GAME' });
	};

	return (
		<div className={s.game}>
			<InformationLayout />
			<FieldLayout />
			{state.isDraw || state.isGameEnded ? (
				<button className={s.resetButton} onClick={resetGame}>
					Начать заново
				</button>
			) : null}
		</div>
	);
};
