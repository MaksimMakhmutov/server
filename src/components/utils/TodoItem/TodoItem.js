import { useState } from 'react';
import s from './styles.module.css';

export const TodoItem = ({ todo, onDelete, onSave }) => {
	const [isEditing, setisEditing] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const [value, setValue] = useState(todo.title);

	const handleSave = async () => {
		setIsFetching(true);
		await onSave({ ...todo, title: value });
		setIsFetching(false);
		setisEditing(false);
	};

	return (
		<li>
			{isEditing ? (
				<input value={value} onChange={(e) => setValue(e.target.value)} />
			) : (
				todo.title
			)}
			<div>
				<button disabled={isFetching} className={s.btn} onClick={onDelete}>
					Удалить
				</button>
				{isEditing ? (
					<button className={s.btn} disabled={isFetching} onClick={handleSave}>
						Сохранить
					</button>
				) : (
					<button className={s.btn} onClick={() => setisEditing(true)}>
						Изменить
					</button>
				)}
			</div>
		</li>
	);
};
