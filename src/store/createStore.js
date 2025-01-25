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
