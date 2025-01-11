import { useState } from 'react';
import {
	useFilterAndSort,
	useEditTodo,
	useJsonServer,
	requestAddTodo,
	requestDeleteTodo,
	requestUpdateTodo,
} from '../../hooks/index.js';
import { TodoList, TodoInput } from '../utils/index.js';
import s from './styles.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const { editingTodo, startEditing, setEditingTodo, saveTodo } = useEditTodo();
	const { search, setSearch, isSort, setIsSort, sortedTodos } = useFilterAndSort(todos);
	const { isLoading } = useJsonServer(setTodos);

	const handleAddTodo = async () => {
		if (newTodo.trim() === '') {
			alert('Поле не может быть пустым');
			return;
		}
		await requestAddTodo(newTodo, setTodos);
		setNewTodo('');
	};

	const handleSaveTodo = async () => {
		await saveTodo(requestUpdateTodo, editingTodo);
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
					<TodoList
						sortedTodos={sortedTodos}
						deleteTodo={(id) => requestDeleteTodo(id, setTodos)}
						editingTodo={editingTodo}
						startEditing={startEditing}
						setEditingTodo={setEditingTodo}
						handleSaveTodo={handleSaveTodo}
					/>
				</div>
			)}
		</div>
	);
};
