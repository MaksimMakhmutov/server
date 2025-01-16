import { useTodo } from '../../context/AppContext';
import s from './styles.module.css';

export const SearchAndSort = () => {
	const { search, setSearch, isSort, setIsSort } = useTodo();
	return (
		<div>
			<input
				className={s.inp}
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Поиск…"
			/>
			<button className={s.btn} onClick={() => setIsSort(!isSort)}>
				{isSort ? 'Отменить сортировку' : 'Сортировать'}
			</button>
		</div>
	);
};
