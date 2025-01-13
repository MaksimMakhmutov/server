import { useState, useEffect } from 'react';

export const useJsonServer = (setTodos) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:3001/todos')
			.then((response) => response.json())
			.then((data) => {
				setTodos(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Ошибка получения данных:', error);
				setIsLoading(false);
			});
	}, [setTodos]);

	return { isLoading };
};
