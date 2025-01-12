import s from './styles.module.css';

export const TodoInputField = ({ newTodo, setNewTodo, handleAddTodo }) => (
	<div>
		<input
			value={newTodo}
			className={s.inp}
			placeholder="Напишите дело"
			onChange={(e) => setNewTodo(e.target.value)}
		/>
		<button className={s.btn} onClick={handleAddTodo}>
			Добавить
		</button>
	</div>
);
