import React, { useState } from 'react';
import { useJsonServer } from './hooks/useJsonServer';
import { useEditTodo } from './hooks/useEditTodo';
import { useFilterAndSort } from './hooks/useFilterAndSort';
import s from './style.module.css';

export const App = () => {
	const [newTodo, setNewTodo] = useState('');
	const { todos, isLoading, addTodo, deleteTodo, updateTodo } = useJsonServer();
	const { editingTodo, startEditing, setEditingTodo, saveTodo } = useEditTodo();
	const { search, setSearch, isSort, setIsSort, sortedTodos } = useFilterAndSort(todos);

	const handleAddTodo = async () => {
		if (newTodo.trim() === '') {
			alert('Поле не может быть пустым');
			return;
		}
		await addTodo(newTodo);
		setNewTodo('');
	};

	const handleSaveTodo = async () => {
		await saveTodo(updateTodo, editingTodo);
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
					<input
						value={newTodo}
						className={s.inp}
						placeholder="Напишите дело"
						onChange={(e) => setNewTodo(e.target.value)}
					/>
					<button className={s.btn} onClick={handleAddTodo}>
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
										<button
											className={s.btn}
											onClick={handleSaveTodo}
										>
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
