function id() {
  let value = -1;
  return {
    get: function () {
      value++;
      return value;
    },
  };
}

export default function todos(todos = [], action) {
  const idGenerator = id();
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        { ...action.payload, createdTime: new Date(), id: todos.length },
      ];

    case "UPDATE":
      const { todoId, field, newValue } = action.payload;
      return todos.map((todo) =>
        todo.id === todoId ? { ...todo, [field]: newValue } : todo
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
