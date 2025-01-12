import { useState } from 'react';
import { useFilterAndSort, useJsonServer, requestAddTodo } from '../../hooks/index';
import { TodoList, TodoInput } from '../utils/index';
import s from './styles.module.css';

export const HomePage = () => {
	const isEmptyString = (str) => !str || str.trim() === '';
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const { search, setSearch, isSort, setIsSort, sortedTodos } = useFilterAndSort(todos);
	const { isLoading } = useJsonServer(setTodos);

	const handleAddTodo = async () => {
		if (isEmptyString(newTodo)) {
			alert('Поле не может быть пустым');
			return;
		}
		await requestAddTodo(newTodo, setTodos);
		setNewTodo('');
	};

	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1>Список дел</h1>
			</div>
			{isLoading ? (
				<div className={s.loader}></div>
			) : (
				<div>
					<TodoInput
						newTodo={newTodo}
						setNewTodo={setNewTodo}
						handleAddTodo={handleAddTodo}
						search={search}
						setSearch={setSearch}
						isSort={isSort}
						setIsSort={setIsSort}
					/>
					<TodoList sortedTodos={sortedTodos} />
				</div>
			)}
		</div>
	);
};
