import { TodoItem } from '../TodoItem/TodoItem';
import s from './styles.module.css';

export const TodoList = ({
	sortedTodos,
	deleteTodo,
	editingTodo,
	startEditing,
	setEditingTodo,
	handleSaveTodo,
}) => (
	<ul className={s.container}>
		{sortedTodos.map((todo, id) => (
			<TodoItem
				key={id}
				todo={todo}
				editingTodo={editingTodo}
				deleteTodo={deleteTodo}
				startEditing={startEditing}
				setEditingTodo={setEditingTodo}
				handleSaveTodo={handleSaveTodo}
			/>
		))}
	</ul>
);
