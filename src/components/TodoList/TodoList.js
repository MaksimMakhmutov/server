import { Link } from 'react-router-dom';
import s from './styles.module.css';
import { useSelector } from 'react-redux';

export const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos);
	const search = useSelector((state) => state.search.search);
	const isSort = useSelector((state) => state.sort.isSort);

	const filteredTodos = todos.filter((todo) => todo.title.includes(search));
	const sortedTodos = isSort
		? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
		: filteredTodos;

	return (
		<ul className={s.container}>
			{sortedTodos.length === 0 ? (
				<li>Дел нет</li>
			) : (
				sortedTodos.map((todo) => (
					<li key={todo.id}>
						<Link className={s.link} to={`/task/${todo.id}`}>
							{todo.title.length > 20
								? `${todo.title.slice(0, 20)}...`
								: todo.title}
						</Link>
					</li>
				))
			)}
		</ul>
	);
};
