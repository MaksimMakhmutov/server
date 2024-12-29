import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { ref, onValue, set, remove } from 'firebase/database';
import s from './style.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const [search, setSearch] = useState('');
	const [isSort, setIsSort] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// Загрузка данных из JSON Server
	useEffect(() => {
		const todosRef = ref(db, 'todos/');
		onValue(todosRef, (snapshot) => {
			const data = snapshot.val();
			const todosArray = data
				? Object.entries(data).map(([id, value]) => ({ id, ...value }))
				: [];
			setTodos(todosArray);
			setIsLoading(false);
		});
	}, []);

	// Добавление нового дела
	const addTodo = async () => {
		const newTodoRef = ref(db, 'todos/' + Date.now());
		await set(newTodoRef, { title: newTodo });
		setNewTodo('');
	};

	// Удаление дела
	const deleteTodo = async (id) => {
		await remove(ref(db, 'todos/' + id));
	};

	const filteredTodos = todos.filter((todo) => todo.title.includes(search));
	const sortedTodos = isSort
		? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
		: filteredTodos;
	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1>Список дел</h1>
			</div>
			{isLoading ? (
				<div className={s.loader}></div>
			) : (
				<div>
					<input
						value={newTodo}
						className={s.inp}
						placeholder="Напишите дело"
						onChange={(e) => setNewTodo(e.target.value)}
					/>
					<button className={s.btn} onClick={addTodo}>
						Добавить
					</button>
					<input
						className={s.inp}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Поиск..."
					/>
					<button className={s.btn} onClick={() => setIsSort(!isSort)}>
						Сортировать
					</button>
					<ul className={s.container}>
						{sortedTodos.map((todo) => (
							<li key={todo.id}>
								{todo.title}
								<button
									className={s.btn}
									onClick={() => deleteTodo(todo.id)}
								>
									Удалить
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
