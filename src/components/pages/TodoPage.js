import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { requestDeleteTodo, requestUpdateTodo } from '../../hooks';
import s from './styles.module.css';

export const TodoPage = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState(null);
	const [title, setTitle] = useState('');
	const [isEditing, setIsEditing] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTodo = async () => {
			const response = await fetch(`http://localhost:3001/todos/${id}`);
			if (response.ok) {
				const todoData = await response.json();
				setTodo(todoData);
				setTitle(todoData.title);
			} else {
				navigate('/404');
			}
		};

		fetchTodo();
	}, [id, navigate]);

	const handleDelete = async () => {
		await requestDeleteTodo(id);
		navigate('/');
	};

	const handleSave = async () => {
		if (title.trim() === '') {
			alert('Поле не может быть пустым');
			return;
		}
		await requestUpdateTodo({ ...todo, title });
		setIsEditing(false);
		navigate(-1);
	};

	return (
		<div className={s.container}>
			{todo ? (
				<div>
					{isEditing ? (
						<div>
							<input
								className={s.inp}
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
					) : (
						<h2>{todo.title}</h2>
					)}
					<button className={s.btn} onClick={() => navigate(-1)}>
						Назад
					</button>
					<button className={s.btn} onClick={handleDelete}>
						Удалить
					</button>
					{isEditing ? (
						<button className={s.btn} onClick={handleSave}>
							Сохранить
						</button>
					) : (
						<button className={s.btn} onClick={() => setIsEditing(true)}>
							Изменить
						</button>
					)}
				</div>
			) : (
				<div className={s.loader}></div>
			)}
		</div>
	);
};
