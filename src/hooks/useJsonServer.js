import { useState, useEffect } from 'react';

export const useJsonServer = (setTodos) => {
	const [isLoading, setIsLoading] = useState(true);

	const LoadingTime = 10;

	useEffect(() => {
		fetch('http://localhost:3001/todos')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setTodos(data);
				setTimeout(() => setIsLoading(false), LoadingTime);
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
				setIsLoading(false);
			});
	}, [setTodos]);
	return { isLoading };
};
