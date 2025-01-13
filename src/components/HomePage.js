import { useState } from 'react';
import { useFilterAndSort, useJsonServer, requestAddTodo } from '../hooks';
import { TodoList, TodoInput, SearchAndSort } from './utils/index';
import s from './styles.module.css';

export const HomePage = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const { search, setSearch, isSort, setIsSort, sortedTodos } = useFilterAndSort(todos);
	const { isLoading } = useJsonServer(setTodos);

	const handleAddTodo = async () => {
		if (!newTodo.trim()) {
			alert('Поле не может быть пустым');
			return;
		}
		const todo = await requestAddTodo(newTodo);
		setTodos((prev) => [...prev, todo]);
		setNewTodo('');
	};

	return (
		<div className={s.container}>
			<h1>Список дел</h1>
			<TodoInput
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				handleAddTodo={handleAddTodo}
			/>
			<SearchAndSort
				search={search}
				setSearch={setSearch}
				isSort={isSort}
				setIsSort={setIsSort}
			/>
			{isLoading ? (
				<div className={s.loader}></div>
			) : (
				<TodoList sortedTodos={sortedTodos} />
			)}
		</div>
	);
};
