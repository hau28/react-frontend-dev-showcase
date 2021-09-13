import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoList/actions/todos";
import { Button, Form, Input, OutlinedBox, PlainInput, Row } from "../Styled";
import Tag from "./Tag";

export default function TodoForm() {
  const [inputs, setInputs] = useState({
    todo: "",
    tag: "",
  });
  const [tags, setTags] = useState([]);

  const dispatch = useDispatch();

  function resetField() {
    setInputs({
      todo: "",
      tag: "",
    });
    setTags([]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo({ todo: inputs.todo, tags: tags, checked: false }));
    resetField();
  }

  function handleEnterTag(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      const trimmedTag = inputs.tag.trim();
      if (trimmedTag) {
        if (!tags.find((tag) => tag === trimmedTag))
          setTags((prev) => [...prev, trimmedTag]);
        setInputs((prev) => ({ ...prev, tag: "" }));
      }
    }
  }

  function handleEnterTodo(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  function handleDeleteTag(title) {
    setTags((prev) => prev.filter((tag) => tag !== title));
  }

  function handleChangeInput(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="todo"
        value={inputs.todo}
        placeholder="Add new todo"
        onChange={handleChangeInput}
        required
        onKeyPress={handleEnterTodo}
        data-testid="todo-input"
      />
      <Row>
        <OutlinedBox marginBottom="0">
          {tags.map((tag) => (
            <Tag title={tag} key={tag} onClick={handleDeleteTag} />
          ))}
          <PlainInput
            type="text"
            name="tag"
            value={inputs.tag}
            placeholder="Add tag"
            onChange={handleChangeInput}
            onKeyPress={handleEnterTag}
            data-testid="tag-input"
          />
        </OutlinedBox>
        <Button
          type="submit"
          margin="0 0 0 0.75rem"
          padding="0 2rem"
          data-testid="add-button"
        >
          Add
        </Button>
      </Row>
    </Form>
  );
}
