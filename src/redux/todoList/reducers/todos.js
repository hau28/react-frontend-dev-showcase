let nextId = 0;

export default function todos(todos = [], action) {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        {
          ...action.payload,
          createdTime: new Date(),
          id: nextId++,
        },
      ];

    case "UPDATE":
      const { todoId, ...fields } = action.payload;
      return todos.map((todo) =>
        todo.id === todoId ? { ...todo, ...fields } : todo
      );

    case "TOGGLE":
      return todos.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, checked: !todo.checked }
          : todo;
      });

    case "REMOVE":
      return todos.filter(function (todo) {
        return todo.id !== action.payload;
      });
    default:
      return todos;
  }
}
