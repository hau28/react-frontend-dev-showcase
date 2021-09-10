export function addTodo(newTodo) {
  return {
    type: "ADD",
    payload: newTodo,
  };
}

export function updateTodo(editedTodo) {
  return {
    type: "UPDATE",
    payload: editedTodo,
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
