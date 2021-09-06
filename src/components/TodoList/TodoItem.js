import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../redux/todoList/actions/todos";
import { IconButton, Line, Row, Strikeable, TagContainer } from "../Styled";
import CheckBox from "./CheckBox";
import Tag from "../TodoList/Tag";
import { DeleteOutlined } from "@ant-design/icons";

export default function TodoItem({ todoObj }) {
  const dispatch = useDispatch();
  const { id, todo, tags, createdTime, checked } = todoObj;
  function handleToggle() {
    dispatch(toggleTodo(id));
  }
  function handleRemove() {
    dispatch(removeTodo(id));
  }
  return (
    <div>
      <Row
        justifyContent="space-between"
        padding="0.75rem 0 0 0"
        margin="0 0 0.5rem 0"
      >
        <Row>
          <CheckBox checked={checked} onClick={handleToggle} />
          <Strikeable strike={checked}>{todo}</Strikeable>
        </Row>
        <IconButton hoverColor="red" onClick={handleRemove}>
          <DeleteOutlined />
        </IconButton>
      </Row>
      <Row>
        {tags.map((tag) => (
          <Tag title={tag} lock key={tag} />
        ))}
      </Row>
      <Row>
        <div style={{ width: "1.75rem" }} />
        <Line />
      </Row>
    </div>
  );
}
