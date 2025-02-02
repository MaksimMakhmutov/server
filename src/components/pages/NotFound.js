import { Link } from 'react-router-dom';
import s from './styles.module.css';

export const NotFound = () => (
	<div className={s.container}>
		<h2>404 - Страница не найдена</h2>
		<Link className={s.link} to="/">
			На главную
		</Link>
	</div>
);
