import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/todoList/actions/todos";
import { Line, Row, Strikeable } from "../Styled";
import CheckBox from "./CheckBox";

export default function TodoItem({ todoObj }) {
  const dispatch = useDispatch();
  const { id, todo, tags, priority, createdTime, checked } = todoObj;
  function handleClick() {
    // console.log(id);
    dispatch(toggleTodo(id));
  }
  return (
    <div style={{ flex: 1 }}>
      <Row alignItems="center" padding="0.75rem 0 0 0" margin="0 0 0.5rem 0">
        <Row>
          <CheckBox checked={checked} onClick={handleClick} />
          <Strikeable strike={checked}>{todo}</Strikeable>
        </Row>
      </Row>
      <Row>
        <div style={{ width: "1.75rem" }} />
        <Line />
      </Row>
    </div>
  );
}
