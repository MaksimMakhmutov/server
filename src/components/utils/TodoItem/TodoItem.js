import s from './styles.module.css';

export const TodoItem = ({
	todo,
	editingTodo,
	deleteTodo,
	startEditing,
	setEditingTodo,
	handleSaveTodo,
}) => (
	<li>
		{editingTodo?.id === todo.id ? (
			<input
				value={editingTodo.title}
				onChange={(e) =>
					setEditingTodo({
						...editingTodo,
						title: e.target.value,
					})
				}
			/>
		) : (
			todo.title
		)}
		<div>
			<button className={s.btn} onClick={() => deleteTodo(todo.id)}>
				Удалить
			</button>
			{editingTodo?.id === todo.id ? (
				<button className={s.btn} onClick={handleSaveTodo}>
					Сохранить
				</button>
			) : (
				<button className={s.btn} onClick={() => startEditing(todo)}>
					Изменить
				</button>
			)}
		</div>
	</li>
);
