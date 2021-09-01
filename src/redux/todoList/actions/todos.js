export function addTodo(newTodo) {
  return {
    type: "ADD",
    payload: newTodo,
  };
}

export function updateTodo(todoId) {
  return {
    type: "UPDATE",
    payload: todoId,
  };
}

export function toggleTodo(todoId) {
  return {
    type: "TOGGLE",
    payload: todoId,
  };
}

export function removeTodo(todoId) {
  return {
    type: "REMOVE",
    payload: todoId,
  };
}
