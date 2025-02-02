import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, TodoPage, NotFound } from './components';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/task/:id" element={<TodoPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};
