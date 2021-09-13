import React from "react";
import { useSelector } from "react-redux";
import { Heading2 } from "../Styled";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoList = useSelector((state) => state.todos);
  const uncheckedCount = todoList.filter((todo) => !todo.checked).length;
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Heading2 data-testid="heading">{`Your todos (${uncheckedCount})`}</Heading2>
      <div
        style={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
