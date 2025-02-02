const initialState = {
	isSort: false,
};

const sortReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_SORT':
			return { ...state, isSort: !state.isSort };
		default:
			return state;
	}
};

export default sortReducer;
