import s from './styles.module.css';

export const TodoInput = ({
	newTodo,
	setNewTodo,
	handleAddTodo,
	search,
	setSearch,
	isSort,
	setIsSort,
}) => (
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
		<input
			className={s.inp}
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			placeholder="Поиск..."
		/>
		<button className={s.btn} onClick={() => setIsSort(!isSort)}>
			Сортировать
		</button>
	</div>
);
