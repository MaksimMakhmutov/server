import { Link } from 'react-router-dom';
import s from './styles.module.css';

export const TodoList = ({ sortedTodos }) => (
	<ul className={s.container}>
		{sortedTodos.length === 0 ? (
			<li>Дел нет</li>
		) : (
			sortedTodos.map((todo) => (
				<li key={todo.id}>
					<Link to={`/task/${todo.id}`}>
						{todo.title.length > 20
							? `${todo.title.slice(0, 20)}...`
							: todo.title}
					</Link>
				</li>
			))
		)}
	</ul>
);
