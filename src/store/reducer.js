import { WIN_PATTERNS, initialState } from './constants';

export function gameReducer(state = initialState, action) {
	switch (action.type) {
		case 'MAKE_MOVE':
			const newField = [...state.field];
			newField[action.index] = state.currentPlayer;
			const isGameEnded = checkWin(newField);
			const isDraw = !newField.includes('') && !isGameEnded;
			return {
				...state,
				field: newField,
				currentPlayer:
					isGameEnded || isDraw
						? state.currentPlayer
						: state.currentPlayer === 'X'
							? '0'
							: 'X',
				isGameEnded,
				isDraw,
			};
		case 'RESET_GAME':
			return initialState;
		default:
			return state;
	}
}

function checkWin(field) {
	for (const pattern of WIN_PATTERNS) {
		if (
			field[pattern[0]] &&
			field[pattern[0]] === field[pattern[1]] &&
			field[pattern[0]] === field[pattern[2]]
		) {
			return true;
		}
	}
	return false;
}

// createStore.js
export function createStore(reducer) {
	let state = reducer(undefined, {}); // Инициализация состояния
	const subscribers = [];

	return {
		getState: () => state,
		dispatch: (action) => {
			state = reducer(state, action);
			subscribers.forEach((subscriber) => subscriber());
		},
		subscribe: (subscriber) => {
			subscribers.push(subscriber);
			return () => {
				const index = subscribers.indexOf(subscriber);
				if (index !== -1) {
					subscribers.splice(index, 1);
				}
			};
		},
	};
}
