export const requestUpdateTodo = async (id, updatedTodo, setTodos) => {
	try {
		const response = await fetch(`http://localhost:3001/todos/${id}`, {
			method: 'PUT',
			body: JSON.stringify(updatedTodo),
			headers: { 'Content-Type': 'application/json' },
		});

		if (!response.ok) throw new Error('Ошибка обновления');
		const data = await response.json();
		setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? data : todo)));
	} catch (error) {
		console.error(error);
		alert('Не удалось обновить задачу');
	}
};
