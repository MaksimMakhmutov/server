export const requestAddTodo = async (newTodo) => {
	const response = await fetch('http://localhost:3001/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title: newTodo }),
	});

	if (!response.ok) throw new Error('Не удалось добавить задачу');
	return response.json();
};
