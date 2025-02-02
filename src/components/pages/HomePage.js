import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, createTodo } from '../../store/actions';
import { TodoList, TodoInput, SearchAndSort } from '../index';
import s from './styles.module.css';

export const HomePage = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);
	const isLoading = useSelector((state) => state.todos.isLoading);
	const search = useSelector((state) => state.todos.search);
	const isSort = useSelector((state) => state.todos.isSort);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	return (
		<div className={s.container}>
			<h1>Список дел</h1>
			<TodoInput handleAddTodo={(newTodo) => dispatch(createTodo(newTodo))} />
			<SearchAndSort />
			{isLoading ? (
				<div className={s.loader}></div>
			) : (
				<TodoList sortedTodos={todos} search={search} isSort={isSort} />
			)}
		</div>
	);
};
