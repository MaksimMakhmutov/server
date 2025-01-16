import { useTodo } from '../../context/AppContext';
import s from './styles.module.css';

export const TodoInput = () => {
	const { newTodo, setNewTodo, handleAddTodo } = useTodo();
	return (
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
};
