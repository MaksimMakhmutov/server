import { useDispatch, useSelector } from 'react-redux';
import { setSearch, toggleSort } from '../../store/actions/todoActions';
import s from './styles.module.css';

export const SearchAndSort = () => {
	const dispatch = useDispatch();
	const search = useSelector((state) => state.todos.search);
	const isSort = useSelector((state) => state.todos.isSort);

	return (
		<div>
			<input
				className={s.inp}
				value={search}
				onChange={(e) => dispatch(setSearch(e.target.value))}
				placeholder="Поиск..."
			/>
			<button className={s.btn} onClick={() => dispatch(toggleSort())}>
				{isSort ? 'Сортировка: По возрастанию' : 'Сортировка: По убыванию'}
			</button>
		</div>
	);
};
