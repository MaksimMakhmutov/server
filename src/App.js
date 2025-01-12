import { useState } from 'react';
import {
	useFilterAndSort,
	useJsonServer,
	requestAddTodo,
	requestDeleteTodo,
	requestUpdateTodo,
} from './hooks/index.js';
import { TodoList, TodoInput } from './components/utils/index.js';
import s from './styles.module.css';

const isEmptyString = (str) => !str || str.trim() === '';

export const App = () => {
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

	const handleSaveTodo = async (updatedTodo) => {
		if (!updatedTodo || updatedTodo.title.trim() === '') {
			alert('Поле не может быть пустым');
			return;
		}
		await requestUpdateTodo(updatedTodo, setTodos);
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
						handleSaveTodo={handleSaveTodo}
					/>
				</div>
			)}
		</div>
	);
};
