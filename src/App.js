import React, { useState, useEffect } from 'react';
import axios from 'axios';
import s from './style.module.css';
export const App = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const [search, setSearch] = useState('');
	const [isSort, setIsSort] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [editingTodo, setEditingTodo] = useState(null);
	// Загрузка данных из JSON Server
	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await axios.get('http://localhost:3005/todos');
				setTodos(response.data);
			} catch (error) {
				console.error('Ошибка при загрузке данных:', error);
			} finally {
				setIsLoading(false); // Устанавливаем isLoading в false после загрузки
			}
		};
		fetchTodos();
	}, []);

	const startEditing = (todo) => {
		setEditingTodo({ ...todo }); // Устанавливаем редактируемый todo
	};

	const saveTodo = async () => {
		await axios.put(`http://localhost:3005/todos/${editingTodo.id}`, editingTodo);
		setTodos(todos.map((todo) => (todo.id === editingTodo.id ? editingTodo : todo)));
		setEditingTodo(null); // Сбрасываем редактирование
	};

	// Добавление нового дела
	const addTodo = async () => {
		const response = await axios.post('http://localhost:3005/todos', {
			title: newTodo,
		});
		setTodos([...todos, response.data]);
		setNewTodo('');
	};
	// Удаление дела
	const deleteTodo = async (id) => {
		await axios.delete(`http://localhost:3005/todos/${id}`);
		setTodos(todos.filter((todo) => todo.id !== id));
		console.log(id);
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
								{editingTodo?.id === todo.id ? (
									<input
										value={editingTodo.title}
										onChange={(e) =>
											setEditingTodo({
												...editingTodo,
												title: e.target.value,
											})
										}
									/>
								) : (
									todo.title
								)}
								<div>
									<button
										className={s.btn}
										onClick={() => deleteTodo(todo.id)}
									>
										Удалить
									</button>
									{editingTodo?.id === todo.id ? (
										<button className={s.btn} onClick={saveTodo}>
											Сохранить
										</button>
									) : (
										<button
											className={s.btn}
											onClick={() => startEditing(todo)}
										>
											Изменить
										</button>
									)}
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
