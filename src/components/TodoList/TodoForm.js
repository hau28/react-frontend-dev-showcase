import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoList/actions/todos";
import { Button, Form, Input, OutlinedBox, PlainInput, Row } from "../Styled";
import Tag from "./Tag";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      tag: "",
      tags: [],
    };
  }

  resetField = () => {
    this.setState({
      todo: "",
      tag: "",
    });
    this.setState({ tags: [] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({
      todo: this.state.todo,
      tags: this.state.tags,
      checked: false,
    });
    this.resetField();
  };

  handleEnterTag = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      const trimmedTag = this.state.tag.trim();
      if (trimmedTag) {
        if (!this.state.tags.find((tag) => tag === trimmedTag))
          this.setState((prev) => ({ tags: [...prev.tags, trimmedTag] }));
        this.setState({ tag: "" });
      }
    }
  };

  handleEnterTodo = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      this.handleSubmit(e);
    }
  };

  handleDeleteTag = (title) => {
    this.setState((prev) => ({
      tags: prev.tags.filter((tag) => tag !== title),
    }));
  };

  handleChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="todo"
          value={this.state.todo}
          placeholder="Add new todo"
          onChange={this.handleChangeInput}
          required
          onKeyPress={this.handleEnterTodo}
          data-testid="todo-input"
        />
        <Row>
          <OutlinedBox marginBottom="0">
            {this.state.tags.map((tag) => (
              <Tag
                title={tag}
                key={tag}
                onClick={this.handleDeleteTag}
                dataTestid={tag}
              />
            ))}
            <PlainInput
              type="text"
              name="tag"
              value={this.state.tag}
              placeholder="Add tag"
              onChange={this.handleChangeInput}
              onKeyPress={this.handleEnterTag}
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
}

function TodoFormFunctional() {
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
            <Tag
              title={tag}
              key={tag}
              onClick={handleDeleteTag}
              dataTestid={tag}
            />
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

export default connect(null, { addTodo })(TodoForm);
