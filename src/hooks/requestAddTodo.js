export const requestAddTodo = async (newTodo, setTodos) => {
	const response = await fetch('http://localhost:3001/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title: newTodo }),
	});
	const data = await response.json();
	setTodos((prevTodos) => [...prevTodos, data]);
};
