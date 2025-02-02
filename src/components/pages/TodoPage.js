import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, editTodo } from '../../store/actions';
import s from './styles.module.css';

export const TodoPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);

	const [todo, setTodo] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState('');

	useEffect(() => {
		const foundTodo = todos.find((t) => t.id === id);
		if (foundTodo) {
			setTodo(foundTodo);
			setTitle(foundTodo.title);
		} else {
			navigate('/404');
		}
	}, [id, navigate, todos]);

	const handleDelete = () => {
		dispatch(removeTodo(todo.id));
		navigate('/');
	};

	const handleSave = () => {
		dispatch(editTodo({ ...todo, title }));
		navigate('/');
	};

	if (!todo) return <div className={s.loader}></div>; // Если задание еще не загружено

	return (
		<div className={s.container}>
			<h2>{isEditing ? 'Изменение задачи' : todo.title}</h2>
			{isEditing ? (
				<>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className={s.inp}
					/>
					<div>
						<button onClick={() => navigate(-1)} className={s.btn}>
							Отменить изменения и на главную
						</button>
						<button onClick={handleSave} className={s.btn}>
							Сохранить
						</button>
					</div>
				</>
			) : (
				<div>
					<button onClick={() => navigate(-1)} className={s.btn}>
						Назад
					</button>
					<button onClick={() => setIsEditing(true)} className={s.btn}>
						Изменить
					</button>
					<button onClick={handleDelete} className={s.btn}>
						Удалить
					</button>
				</div>
			)}
		</div>
	);
};
