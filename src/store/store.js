import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import todosReducer from './redusers/todosReducer';
import searchReducer from './redusers/searchReducer';
import sortReducer from './redusers/sortReducer';

const rootReducer = combineReducers({
	todos: todosReducer,
	search: searchReducer,
	sort: sortReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
