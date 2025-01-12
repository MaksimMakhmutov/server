import s from './styles.module.css';

export const SearchAndSort = ({ search, setSearch, isSort, setIsSort }) => (
	<div>
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
