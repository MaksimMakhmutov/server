import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, TodoPage, NotFound } from './components/index';
import { TodoProvider } from './context/AppContext';

export const App = () => (
	<TodoProvider>
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/task/:id" element={<TodoPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	</TodoProvider>
);
