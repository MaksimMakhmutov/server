import { useTodo } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import s from './styles.module.css';

export const TodoList = () => {
	const { sortedTodos, isLoading } = useTodo();

	return (
		<ul className={s.list}>
			{isLoading ? (
				<div className={s.loader}></div>
			) : sortedTodos.length === 0 ? (
				<li>Дел нет</li>
			) : (
				sortedTodos.map((todo) => (
					<li key={todo.id}>
						<Link className={s.link} to={`/task/${todo.id}`}>
							{todo.title.length > 20
								? `${todo.title.slice(0, 20)}…`
								: todo.title}
						</Link>
					</li>
				))
			)}
		</ul>
	);
};
