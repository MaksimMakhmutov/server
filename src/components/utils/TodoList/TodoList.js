import { TodoItem } from '../TodoItem/TodoItem';
import s from './styles.module.css';

export const TodoList = ({ sortedTodos, deleteTodo, handleSaveTodo }) => (
	<ul className={s.container}>
		{sortedTodos.length === 0 ? (
			<li>Дел нет</li>
		) : (
			sortedTodos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onDelete={() => deleteTodo(todo.id)}
					onSave={(todo) => handleSaveTodo(todo)}
				/>
			))
		)}
	</ul>
);
