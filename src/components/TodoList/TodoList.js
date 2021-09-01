import React from "react";
import { useSelector } from "react-redux";
import { Heading2 } from "../Styled";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useSelector((state) => state.todos);
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Heading2>Your todos</Heading2>
      <div style={{ flex: 1, overflow: "visible" }}>
        {todoList.map((todo) =>
          todo.checked ? null : <TodoItem key={todo.id} todoObj={todo} />
        )}
        {todoList.map((todo) =>
          todo.checked ? <TodoItem key={todo.id} todoObj={todo} /> : null
        )}
      </div>
    </div>
  );
}
