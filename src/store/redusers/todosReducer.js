const initialState = {
	todos: [],
	isLoading: true,
};

const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TODOS':
			return { ...state, todos: action.payload, isLoading: false };
		case 'ADD_TODO':
			return { ...state, todos: [...state.todos, action.payload] };
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case 'UPDATE_TODO':
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo,
				),
			};
		default:
			return state;
	}
};

export default todosReducer;
