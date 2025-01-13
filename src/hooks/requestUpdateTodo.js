export const requestUpdateTodo = async (updatedTodo) => {
	const response = await fetch(`http://localhost:3001/todos/${updatedTodo.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updatedTodo),
	});

	if (!response.ok) throw new Error('Не удалось обновить задачу');
	return response.json();
};
