import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleTodo,
  updateTodo,
} from "../../redux/todoList/actions/todos";
import {
  IconButton,
  Line,
  PlainInput,
  Row,
  Strikeable,
  TagContainer,
} from "../Styled";
import CheckBox from "./CheckBox";
import Tag from "../TodoList/Tag";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import { colorPalette } from "../../constants/theme";

export default function TodoItem({ todoObj }) {
  const [editing, setEditing] = useState(false);
  const [edited, setEditied] = useState(todoObj.todo);
  const dispatch = useDispatch();
  const { id, todo, tags, createdTime, checked } = todoObj;
  function handleToggle() {
    dispatch(toggleTodo(id));
  }
  function handleRemove() {
    dispatch(removeTodo(id));
  }
  function handleEdit() {
    setEditing(true);
  }
  function handleChangeInput(e) {
    setEditied(e.target.value);
  }
  function handleEnterInput(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      dispatch(updateTodo({ todoId: id, todo: edited }));
      setEditing(false);
    }
  }

  return (
    <div>
      <Row
        justifyContent="space-between"
        padding="0.75rem 0 0 0"
        margin="0 0 0.5rem 0"
      >
        {editing ? (
          <PlainInput
            autoFocus
            type="text"
            name="tag"
            value={edited}
            onChange={handleChangeInput}
            onKeyPress={handleEnterInput}
          />
        ) : (
          <Row>
            <CheckBox checked={checked} onClick={handleToggle} />
            <Strikeable strike={checked}>{todo}</Strikeable>
          </Row>
        )}
        {editing ? (
          <Row justifyContent="flex-end">
            <span style={{ color: colorPalette.darkWhitesmoke }}>Editing</span>
          </Row>
        ) : (
          <Row justifyContent="flex-end">
            <IconButton
              hoverColor="blue"
              onClick={handleEdit}
              margin="0 0.5rem 0 0"
            >
              <EditFilled />
            </IconButton>
            <IconButton hoverColor="red" onClick={handleRemove}>
              <DeleteOutlined />
            </IconButton>
          </Row>
        )}
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
