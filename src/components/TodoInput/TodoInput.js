import { useState } from 'react';
import s from './styles.module.css';

export const TodoInput = ({ handleAddTodo }) => {
	const [newTodo, setNewTodo] = useState('');

	const handleClick = () => {
		if (newTodo.trim()) {
			handleAddTodo(newTodo.trim());
			setNewTodo('');
		} else {
			alert('Поле не может быть пустым');
		}
	};

	return (
		<div>
			<input
				value={newTodo}
				className={s.inp}
				placeholder="Напишите дело"
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<button className={s.btn} onClick={handleClick}>
				Добавить
			</button>
		</div>
	);
};
