import { requestAddTodo, requestDeleteTodo, requestUpdateTodo } from '../../hooks';
import { setTodos, addTodo, deleteTodo, updateTodo } from './todoActions'; // Импортируйте обычные экшены

export const fetchTodos = () => async (dispatch) => {
	const response = await fetch('http://localhost:3001/todos');
	const data = await response.json();
	dispatch(setTodos(data));
};

export const createTodo = (newTodo) => async (dispatch) => {
	const todo = await requestAddTodo(newTodo);
	dispatch(addTodo(todo));
};

export const removeTodo = (id) => async (dispatch) => {
	await requestDeleteTodo(id);
	dispatch(deleteTodo(id));
};

export const editTodo = (todo) => async (dispatch) => {
	const updatedTodo = await requestUpdateTodo(todo);
	dispatch(updateTodo(updatedTodo));
};
