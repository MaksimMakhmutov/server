import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useNavigate,
	useParams,
} from 'react-router-dom';
import axios from 'axios';
import s from './style.module.css';

const Home = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const [search, setSearch] = useState('');
	const [isSort, setIsSort] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:3005/todos').then((res) => setTodos(res.data));
	}, []);

	const addTodo = () => {
		axios.post('http://localhost:3005/todos', { title: newTodo }).then((res) => {
			setTodos([...todos, res.data]);
			setNewTodo('');
		});
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
			<input
				placeholder="Напишите дело..."
				className={s.inp}
				value={newTodo}
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
			<ul>
				{sortedTodos.map((todo) => (
					<li key={todo.id}>
						<Link to={`/task/${todo.id}`}>
							{todo.title.length > 20
								? `${todo.title.slice(0, 20)}...`
								: todo.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

const Task = () => {
	const { id } = useParams();
	const [todo, setTodo] = useState(null);
	const [editMode, setEditMode] = useState(false);
	const [editedTitle, setEditedTitle] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		axios.get(`http://localhost:3005/todos/${id}`).then((res) => setTodo(res.data));
	}, [id]);

	const deleteTodo = () => {
		axios.delete(`http://localhost:3005/todos/${id}`).then(() => navigate('/'));
	};

	useEffect(() => {
		axios.get(`http://localhost:3005/todos/${id}`).then((res) => {
			setTodo(res.data);
			setEditedTitle(res.data.title);
		});
	}, [id]);

	const updateTodo = () => {
		axios
			.put(`http://localhost:3005/todos/${id}`, { title: editedTitle })
			.then(() => {
				setTodo({ ...todo, title: editedTitle });
				setEditMode(false);
			});
	};

	return todo ? (
		<div className={s.todo_container}>
			<button className={s.btn} onClick={() => navigate(-1)}>
				Назад
			</button>
			{editMode ? (
				<>
					<input
						className={s.inp}
						value={editedTitle}
						onChange={(e) => setEditedTitle(e.target.value)}
					/>
					<button className={s.btn} onClick={updateTodo}>
						Сохранить
					</button>
				</>
			) : (
				<>
					<h4>{todo.title}</h4>
					<button className={s.btn} onClick={() => setEditMode(true)}>
						Редактировать
					</button>
				</>
			)}
			<button className={s.btn} onClick={deleteTodo}>
				Удалить
			</button>
		</div>
	) : null;
};

export const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/task/:id" element={<Task />} />
			<Route path="*" element={<div>404 Not Found</div>} />
		</Routes>
	</Router>
);

export default App;
